import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { MainHeading, MainPara } from "../../components";

const Privacy = () => {
  return (
    <>
      <Box paddingY={7}>
        <Container>
          <Stack direction="column" gap={2}>
            <MainHeading heading="Privacy Policy" />

            <MainPara para="Four More Supports is committed to protecting your personal and sensitive information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). We understand the importance of your privacy and handle your information with care, respect, and transparency." />
            <MainPara para="This Privacy Policy outlines how we collect, use, store, and manage your information—especially in the context of providing disability support services." />

            <MainHeading heading="Information Collection" />
            <MainPara para="We collect personal and sensitive information when you interact with us, including when you:" />
            <Stack direction="column" gap={1}>
              <MainPara para="• Contact us through our website" />
              <MainPara para="• Register for our services" />
              <MainPara para="• Speak with our support staff" />
              <MainPara para="• Fill out forms (online or in person)" />
              <MainPara para="• Access NDIS-funded services" />
            </Stack>

            <MainHeading heading="Types of Information We May Collect Include:" />
            <Stack direction="column" gap={1}>
              <MainPara para="• Full name and date of birth" />
              <MainPara para="• Contact details (phone number, email, address)" />
              <MainPara para="• Emergency contact details" />
              <MainPara para="• NDIS participant number and plan details" />
              <MainPara para="• Health and disability-related information" />
              <MainPara para="• Support preferences and service history" />
              <MainPara para="• Cultural background and language preferences" />
              <MainPara para="• Website activity and technical data (via cookies and tracking)" />
            </Stack>
            <MainPara para="We only collect information that is reasonably necessary for our functions or activities." />

            <MainHeading heading="Purpose of Collection" />
            <MainPara para="We collect personal and sensitive information to:" />
            <Stack direction="column" gap={1}>
              <MainPara para="• Provide and tailor support services" />
              <MainPara para="• Comply with NDIS and legal requirements" />
              <MainPara para="• Communicate effectively with clients and caregivers" />
              <MainPara para="• Monitor and improve our services" />
              <MainPara para="• Maintain accurate records for continuity of care" />
              <MainPara para="• Respond to inquiries and feedback" />
              <MainPara para="• Fulfill obligations to funding and regulatory bodies" />
            </Stack>
            <MainPara para="We will always inform you why we are collecting your data and how it will be used at the time of collection, where possible." />

            <MainHeading heading="Information Usage" />
            <MainPara para="We use your information only for purposes that are directly related to the delivery of our services and functions. We do not sell or rent your personal information to third parties." />
            <MainPara para="Your information may be shared with:" />
            <Stack direction="column" gap={1}>
              <MainPara para="• Your nominated carers or representatives (with consent)" />
              <MainPara para="• Registered NDIS providers involved in your care (with consent)" />
              <MainPara para="• Government agencies or departments as required by law" />
              <MainPara para="• Our professional advisors, IT providers, and legal representatives (under strict confidentiality)" />
            </Stack>
            <MainPara para="We ensure that all third parties we work with uphold privacy standards consistent with our own." />

            <MainHeading heading="Data Storage and Security" />
            <MainPara para="We take the security of your data seriously and implement a range of measures to protect it from unauthorized access, misuse, or loss." />
            <Stack direction="column" gap={1}>
              <MainPara para="• Secure servers and password-protected databases" />
              <MainPara para="• Access control for staff based on role and responsibility" />
              <MainPara para="• Encryption of sensitive electronic data" />
              <MainPara para="• Secure destruction of paper records no longer required" />
              <MainPara para="• Regular audits of our data protection practices" />
            </Stack>
            <MainPara para="If there is a data breach that is likely to cause serious harm, we will notify you in accordance with the Notifiable Data Breaches Scheme." />

            <MainHeading heading="User Rights" />
            <MainPara para="You have the right to:" />
            <Stack direction="column" gap={1}>
              <MainPara para="• Access your personal information" />
              <MainPara para="• Correct any inaccurate or outdated information" />
              <MainPara para="• Withdraw consent for non-essential uses" />
              <MainPara para="• Request deletion of your data (subject to legal requirements)" />
              <MainPara para="• Lodge a complaint if you believe your privacy has been breached" />
            </Stack>
            <MainPara para="To request access or correction, simply contact us using the details provided below. We aim to respond to all requests within 30 days." />

            <MainHeading heading="Cookies and Tracking Technologies" />
            <MainPara para="Our website may use cookies and similar technologies to enhance your browsing experience and collect basic analytics." />
            <Stack direction="column" gap={1}>
              <MainPara para="• These tools do not identify you personally" />
              <MainPara para="• You can adjust your browser settings to refuse cookies" />
              <MainPara para="• Some features may not function properly without cookies" />
            </Stack>

            <MainHeading heading="Contact Information" />
            <MainPara para="If you have any questions, concerns, or complaints about your privacy or this policy, please contact:" />
            <Stack direction="column" gap={1}>
              <MainPara para="• Privacy Officer" />
              <MainPara para="• Four More Supports" />
              <MainPara para="• Email: info@fourmoresupports.com.au" />
              <MainPara para="• Phone: +61426393517" />
            </Stack>
            <MainPara para="You may also contact the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au." />

            <MainHeading heading="Policy Updates" />
            <MainPara para="We may update this Privacy Policy to reflect changes in legislation or our practices. The latest version will always be available on our website." />

            <MainHeading heading="Our Commitment" />
            <MainPara para="At Four More Supports, your trust is everything. We are committed to protecting your privacy, respecting your rights, and ensuring your information is handled with the utmost care and integrity." />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Privacy;
