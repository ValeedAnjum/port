import { Box, Grid, Typography } from "@mui/material";
import React, { ReactNode } from "react";

const PrimaryTitle = ({
  text,
  label,
  url,
}: {
  text: string;
  label?: string;
  url?: string;
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: { md: "2rem", xs: "1.5rem", flexGrow: 1 },
          fontWeight: "700",
          color: "text.primary",
        }}
      >
        {text}
      </Typography>
      {label && url && (
        <Typography
          variant="h1"
          sx={{
            fontSize: { md: "2rem", xs: "1.5rem" },
            fontWeight: "700",
            color: "text.secondary",
            cursor: "pointer",
            textDecoration: "none",
          }}
          component="a"
          href={url}
          target="_blank"
        >
          {label}
        </Typography>
      )}
    </Box>
  );
};

const SecondaryTitle = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        fontSize: { md: "1rem", xs: "0.8rem" },
        color: "text.secondary",
      }}
    >
      {text}
    </Typography>
  );
};

const PrimaryListItem = ({ text }: { text: string }) => {
  return (
    <Typography variant="body1" sx={{ color: "text.primary" }}>
      {text}
    </Typography>
  );
};

const PrimaryList = ({ children }: { children: ReactNode }) => {
  return (
    <ol style={{ padding: "1rem" }}>
      {React.Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ol>
  );
};
const RightPanel = ({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "50%" },
        ml: { xs: "0", sm: "50%" },
        mb: { xs: 1, md: "0" },
        // border: `1px solid ${color}`,
        position: "relative",
        "&::before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: `${color}`,
          ml: "-8px",
          display: { xs: "none", sm: "block" },
        },
      }}
    >
      <Box
        sx={{
          border: `1px solid ${color}`,
          ml: { xs: 0, sm: "30px" },
          p: { xs: 1, sm: 2 },
          borderRadius: "3px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

const LeftPanel = ({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "50%" },
        mr: { xs: "0", sm: "50%" },
        mb: { xs: 1, md: "0" },
        // border: `1px solid ${color}`,
        position: "relative",
        "&::before": {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: `${color}`,
          mr: "-8px",
          display: { xs: "none", sm: "block" },
        },
      }}
    >
      <Box
        sx={{
          border: `1px solid ${color}`,
          mr: { xs: 0, sm: "30px" },
          p: { xs: 1, sm: 2 },
          borderRadius: "3px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
export const WorkSec = () => {
  return (
    <Grid
      container
      sx={{ p: { xs: 2 } }}
      justifyContent={{ xs: "flex-start", md: "center" }}
      id="work-sec"
    >
      <Typography
        variant="h1"
        sx={{ color: "text.primary", textAlign: "center", pb: 2 }}
      >
        Commercial Projects
      </Typography>
      <Box
        sx={{
          //   border: "1px solid red",
          width: { sm: "100%", md: "85%" },
          position: "relative",
          p: { xs: 0, sm: 2 },
        }}
      >
        {/* Center Line */}
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "1px",
            top: 0,
            left: "50%",
            backgroundColor: "#ccc",
            display: { xs: "none", sm: "block" },
          }}
        />
        {/* Right */}
        <RightPanel color="#42b853">
          <PrimaryTitle
            text="Personnel Library"
            label="Live"
            url="https://www.personnellibrary.co.uk/"
          />
          <SecondaryTitle
            text="A SaaS Product for managing recruitment, onboarding, and performance tracking, while assisting the HR
            department in generating payrolls and managing employee data."
          />
          <PrimaryList>
            <PrimaryListItem text="Designed and implemented the core frontend architecture using Next.Js." />
            <PrimaryListItem
              text="Led a team of frontend developers, mentoring junior members and coordinating tasks to ensure timely delivery of
              features."
            />
            <PrimaryListItem text="Conducted code reviews and ensured adherence to best practices, improving code quality and maintainability" />
            <PrimaryListItem
              text="Collaborated closely with backend teams, designers, and product managers to align the frontend with project goals
              and ensure seamless integration across the system."
            />
            <PrimaryListItem
              text="Implemented a monorepo structure for the frontend, streamlining code management across multiple modules and
              teams"
            />
          </PrimaryList>
        </RightPanel>
        <LeftPanel color="#f26522">
          <PrimaryTitle
            text="Identity Gram"
            label="Live"
            url="https://identitygram.co.uk/"
          />
          <SecondaryTitle text="A SaaS product for user identity verification through documents." />
          <PrimaryList>
            <PrimaryListItem
              text="Contributed to building the frontend of the platform using Next.js, ensuring a responsive and efficient user
              interface."
            />
          </PrimaryList>
        </LeftPanel>
        <RightPanel color="#6e41ff">
          <PrimaryTitle text="Mortgage" />
          <SecondaryTitle
            text="Comprehensive platform designed to simplify the mortgage process for both lenders and borrowers. It streamlines
            loan applications, approval workflows, and payment management"
          />
          <PrimaryList>
            <PrimaryListItem text="Led the development of the platform using React, creating an intuitive, user-friendly interface for multiple types of users." />
            <PrimaryListItem
              text="Developed a custom solution for capturing client signatures on PDF documents directly within the platform,
            eliminating the need for third-party services like HelloSignAPI, saving the company significant costs on API
            integration fees."
            />
          </PrimaryList>
        </RightPanel>
        <LeftPanel color="#ec008c">
          <PrimaryTitle text="Insolvency" />
          <SecondaryTitle
            text="Insolvency is a specialized platform used by insolvency practitioners to manage and streamline the process of debt
            restructuring, bankruptcy filings, and financial recovery. It offers tools for efficient case management, legal
            documentation, and compliance, enabling practitioners to navigate the complexities of insolvency proceedings
            effectively."
          />
          <PrimaryList>
            <PrimaryListItem
              text="Leveraged Redux for state management and RTK Query for efficient API integration, ensuring seamless data
              handling across the application."
            />
            <PrimaryListItem text="Integrated React Hook Form to manage complex forms , improving user experience and accuracy" />
            <PrimaryListItem
              text="Focused on optimizing performance and load times, ensuring that large volumes of data (case records, financial
              reports) are handled efficiently through virtualization."
            />
          </PrimaryList>
        </LeftPanel>
        <RightPanel color="#1f1d27a8">
          <PrimaryTitle text="Learning Management System (LMS) - Core Features Focus" />
          <SecondaryTitle
            text="A modular Learning Management System (LMS) designed with core features for managing courses, users, and assessments. 
            Built with flexibility in mind, it allows seamless customization and updates to meet diverse client requirements efficiently."
          />
          <PrimaryList>
            <PrimaryListItem
              text="Created the frontend architecture with base modules, providing a foundation that allowed for the rapid addition of
              customized features tailored to each client’s needs."
            />
            <PrimaryListItem
              text="By developing a modular architecture, significantly reduced development time and costs for future updates and
              customizations, enabling faster client onboarding and deployment."
            />
          </PrimaryList>
        </RightPanel>
      </Box>
    </Grid>
  );
};
