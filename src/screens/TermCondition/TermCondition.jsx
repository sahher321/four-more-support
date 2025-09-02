import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { MainHeading, MainPara } from "../../components";

const TermCondition = () => {
  return (
    <>
      <Box paddingY={7}>
        <Container>
          <Stack direction="column" gap={2}>
            <MainHeading heading="Terms and Conditions" />

            <MainPara para="Welcome to Four More Supports. These Terms and Conditions outline the rules and responsibilities when using our website and services. By accessing or using our site and services, you agree to comply with these terms." />

            <MainHeading heading="1. Use of Our Website" />
            <Stack direction="column" gap={1}>
              <MainPara para="• The content of this website is for general information only." />
              <MainPara para="• We aim to ensure the accuracy and currency of all content, but we do not guarantee it." />
              <MainPara para="• You must not misuse this website or its content." />
            </Stack>

            <MainHeading heading="2. Service Availability" />
            <Stack direction="column" gap={1}>
              <MainPara para="• Our support services are subject to eligibility, assessment, and available funding." />
              <MainPara para="• We reserve the right to change or discontinue services at any time, with reasonable notice." />
              <MainPara para="• Access to services does not guarantee ongoing support unless agreed upon." />
            </Stack>

            <MainHeading heading="3. Intellectual Property" />
            <Stack direction="column" gap={1}>
              <MainPara para="• All text, images, and content on this site are the property of Four More Supports unless otherwise noted." />
              <MainPara para="• You may not reproduce, distribute, or use any content for commercial purposes without written permission." />
            </Stack>

            <MainHeading heading="4. Privacy and Confidentiality" />
            <MainPara para="We are committed to protecting your privacy. Please refer to our Privacy Policy for full details on how we handle personal and sensitive information." />

            <MainHeading heading="5. Limitation of Liability" />
            <Stack direction="column" gap={1}>
              <MainPara para="• While we take care in delivering our services, we are not liable for any loss or damage caused by external events or user misuse." />
              <MainPara para="• Our liability is limited to the extent permitted by law." />
            </Stack>

            <MainHeading heading="6. User Responsibilities" />
            <Stack direction="column" gap={1}>
              <MainPara para="• You are responsible for providing accurate, complete, and current information when engaging with us." />
              <MainPara para="• You agree not to engage in unlawful, abusive, or misleading conduct through our services or website." />
            </Stack>

            <MainHeading heading="7. Third-Party Links" />
            <MainPara para="Our website may contain links to third-party websites for your convenience. We are not responsible for the content or practices of these sites." />

            <MainHeading heading="8. Changes to These Terms" />
            <MainPara para="We may update these Terms and Conditions as needed. The latest version will always be available on our website. Continued use of the site means you accept any changes." />

            <MainHeading heading="9. Governing Law" />
            <MainPara para="These Terms and Conditions are governed by the laws of New South Wales and the Commonwealth of Australia." />

            <MainHeading heading="10. Contact Information" />
            <Stack direction="column" gap={1}>
              <MainPara para="If you have any questions about these terms, please contact:" />
              <MainPara para="• Four More Supports" />
              <MainPara para="• Email: info@fourmoresupports.com.au" />
              <MainPara para="• Phone: +61426393517" />
            </Stack>

            <MainHeading heading="Thank You" />
            <MainPara para="Thank you for trusting Four More Supports. We’re here to serve you with respect, safety, and transparency." />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default TermCondition;
