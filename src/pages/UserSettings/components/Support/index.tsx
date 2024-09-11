import {
  Card,
  CardTitle,
  SupportContainer,
  SupportText,
  ReportButton,
} from './styles'

export function Support() {
  const handleReportProblem = () => {
    const subject = encodeURIComponent("Problem Report - Chimptok");
    const body = encodeURIComponent("Describe your issue or question here:");
    window.location.href = `mailto:contact@chimptok.com?subject=${subject}&body=${body}`;
  };

  return (
    <Card>
      <CardTitle>Support</CardTitle>
      <SupportContainer>
        <SupportText>
          {`Got problems or questions?`} <br />{' '}
          {`Shoot us a message at contact@chimptok.com.`}
          <br /> {`We've got your back!`}
        </SupportText>
      </SupportContainer>
      <ReportButton onClick={handleReportProblem}>Report Problem</ReportButton>
    </Card>
  );
}