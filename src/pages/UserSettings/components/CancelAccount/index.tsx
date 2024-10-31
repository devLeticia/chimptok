import { ChangeEvent, useEffect, useState } from 'react';
import { loading } from '../../../../components/Loading';
import { TextArea } from '../../../../components/Textarea';
import { toast } from '../../../../components/Toast';
import accountService from '../../../../http/requests/accounts/account.service';
import { CheckBox } from './../../../../components/Checkbox/index';
import { ArrowCircleLeft } from '@phosphor-icons/react/dist/ssr';
import {
  Card,
  CardTitle,
  Subtitle,
  ButtonsContainer,
  DeleteAccountButton,
  NeverMindButton,
  Container,
  BackButton
} from './styles';
import { useNavigate } from 'react-router-dom';
import { ConfirmDialog } from '../../../../components/Dialog';

type CancelationReason = {
  id: string;
  reason: string;
};
interface CancelAccountProps {
  onHandleBack: () => void; // This is the type for the onCancelClick function
}

export function CancelAccount({ onHandleBack }: CancelAccountProps) {
  const navigate = useNavigate();
  
  const goBackToAccountInfo = () => {
    onHandleBack(); 
  };

  const [comment, setComment] = useState('');
  const [cancelationReasons, setCancelationReasons] = useState<CancelationReason[]>([]);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [isHovered, setIsHovered] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    async function fetchReasons() {
      try {
        const response = await accountService.getCancelationReasons();
        setCancelationReasons(response as CancelationReason[]);
      } catch (error) {
        console.error('Error fetching cancellation reasons:', error);
      }
    }
    fetchReasons();
  }, []);
  
  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };
  
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reasonId = event.target.name;
  
    if (event.target.checked) {
      setSelectedReasons(prev => [...prev, reasonId]);
    } else {
      setSelectedReasons(prev => prev.filter(id => id !== reasonId));
    }
  };

  function handleCancelAccount(): void {
    const userId: string | null = localStorage.getItem('user_id');
    const reasonsToCancel = {
      foundAlternative: selectedReasons.includes('foundAlternative'),
      lackOfFeatures: selectedReasons.includes('lackOfFeatures'),
      poorUserInterface: selectedReasons.includes('poorUserInterface'),
      notFeelingIt: selectedReasons.includes('notFeelingIt'),
    };

    const payload = {
      userId,
      reasonsToCancel,
      comments: comment,
    };

    if (userId !== null) {
      loading.open();
      accountService.cancelAccount(payload)
        .then((resp) => {
          concludeAccountCancelation();
        })
        .catch((err) => {
          console.log(err);
          toast.show(`Erro ao deslogar: ${err.message}`, 'danger', 10000);
        })
        .finally(() => {
          loading.close();
        });
    }
  }

  function concludeAccountCancelation() {
    console.log('entrou no conclude cancelation')
    localStorage.clear();
    navigate('/login');
  }
  
  function handleOpenDialog() {
    setIsDialogOpen(true)
  }

  function handleCloseDialog() {
    setIsDialogOpen(false)
  }


  return (
    <div>
      <Card>
        <BackButton onClick={goBackToAccountInfo}>
          <ArrowCircleLeft
            size={36}
            weight={isHovered ? 'duotone' : 'light'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </BackButton>
        <CardTitle>Cancel Account</CardTitle>
        <Container>
          <Subtitle>{`Changing paths? Let us know why Chimp isn't swinging your way:`}</Subtitle>
          
          { 
            cancelationReasons.map((r) => (
              <CheckBox 
                key={r.id} 
                label={r.reason}  
                type="checkbox"
                name={r.id}
                checked={selectedReasons.includes(r.id)}
                onChange={handleCheckboxChange}
              />
            ))
          }
        </Container>
        <Container>
          <Subtitle>{`Feel free to unload more details in the space below. We're all ears:`}</Subtitle>
          <TextArea 
            name="aditionalComment" 
            value={comment} 
            onChange={handleCommentChange}
          />
        </Container>
        <Container>
          <Subtitle>What will happen to your account?</Subtitle>
          <p>
            {`After cancelling your account, you will lose access to all Chimptok features. 
            All stored data, including goals set, history, and reports, will be permanently deleted.
            Are you sure you want to proceed?
            If you need assistance or have questions, please contact us at contact@chimptok.com.br before completing the cancellation.`}
          </p>
        </Container>
        <ButtonsContainer>
          <NeverMindButton onClick={goBackToAccountInfo}>Never Mind</NeverMindButton>
          <DeleteAccountButton 
            onClick={handleOpenDialog} 
            disabled={selectedReasons.length === 0}>
            Delete Account
          </DeleteAccountButton>
        </ButtonsContainer>
        <ConfirmDialog
          cancelText="Cancel"
          confirmationText="Delete"
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          onConfirm={handleCancelAccount}
          title={'Are you sure?'}
          text={`All goals and tasks, as well as its history will be deleted.`}
        ></ConfirmDialog>
      </Card>
    </div>
  );
}
