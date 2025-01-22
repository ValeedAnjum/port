import { Box, Grid, Typography } from "@mui/material";
import React, { ReactNode } from "react";

const PrimaryTitle = ({ text }: { text: string }) => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { md: "2rem", xs: "1.5rem" },
        fontWeight: "700",
        color: "text.primary",
      }}
    >
      {text}
    </Typography>
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
export const ExperianceSec = () => {
  return (
    <Grid
      container
      sx={{ p: { xs: 2 } }}
      justifyContent={{ xs: "flex-start", md: "center" }}
      id="experience-sec"
    >
      <Typography
        variant="h1"
        sx={{ color: "text.primary", textAlign: "center", pb: 2 }}
      >
        Professional Experience
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
          <PrimaryTitle text="Software Engineer" />
          <SecondaryTitle text="GenEdu. (Islamabad, PK)" />
          <SecondaryTitle text="Aug 2024 – Present" />
          <PrimaryList>
            <PrimaryListItem
              text="Designed, developed, and managed the technical architecture
               of a SaaS product to ensure alignment with market needs and adherence to technical standards."
            />
            <PrimaryListItem
              text="Developed and optimized both frontend and backend architectures, ensuring seamless integration, 
          scalability, and alignment with user experience and performance standards."
            />
          </PrimaryList>
        </RightPanel>
        <LeftPanel color="#f26522">
          <PrimaryTitle text="Senior Frontend Engineer" />
          <SecondaryTitle text="Consultancy Outfit (Islamabad, PK)" />
          <SecondaryTitle text="Jan 2023 – Aug 2024" />
          <PrimaryList>
            <PrimaryListItem text="Designed a custom document signing solution in React." />
            <PrimaryListItem text="Eliminated the need for third-party APIs like HelloSign" />
            <PrimaryListItem text="Achieved significant cost savings for the project." />
            <PrimaryListItem text="Created a scalable front-end architecture." />
            <PrimaryListItem text="Implemented a mono-repo structure for better code management and collaboration" />
            <PrimaryListItem text="Accelerated the initiation of new projects, resulting in enhanced overall team efficiency" />
            <PrimaryListItem text="Reduced time-to-market for new products and features." />
          </PrimaryList>
        </LeftPanel>
        <RightPanel color="#6e41ff">
          <PrimaryTitle text="Software Engineer" />
          <SecondaryTitle text="Med Exam Expert (Islamabad, PK)" />
          <SecondaryTitle text="Aug 2021 – Jan 2023" />
          <PrimaryList>
            <PrimaryListItem text="Enhanced React app performance through frontend optimization techniques." />
            <PrimaryListItem
              text="Implemented a Node server on CentOS and configured NGINX for load balancing and reverse proxy tasks,
                    improving server response time."
            />
            <PrimaryListItem text="Established a CI/CD pipeline on AWS using GitHub Actions, reducing deployment times by 50 Percent." />
            <PrimaryListItem text="Configured multiple applications on a single server using NGINX." />
            <PrimaryListItem
              text="Conducted performance checks on the Node server using tools like k6 and autocannon, identifying and resolving
                    bottlenecks to improve server efficiency."
            />
            <PrimaryListItem
              text="Utilized pm2 to deploy a cluster of Node applications, achieving effective load balancing and enhancing application
                    availability"
            />
          </PrimaryList>
        </RightPanel>
        <LeftPanel color="#ec008c">
          <PrimaryTitle text="Mern Stack Developer" />
          <SecondaryTitle text="BothOfUs (Stockholm, Sweden Remote)" />
          <SecondaryTitle text="Jan 2023 – Aug 2024" />
          <PrimaryList>
            <PrimaryListItem text="Developed frontend App in react for comprehensive Project Cost Estimation tool to streamline budgeting processes" />
            <PrimaryListItem
              text="Launched a React and Node application on an EC2 instance, achieving 99.9% uptime through effective monitoring
                    using CloudWatch."
            />
            <PrimaryListItem text="Successfully managed and executed projects independently, delivering high-quality solutions." />
          </PrimaryList>
        </LeftPanel>
        <RightPanel color="#1f1d27a8">
          <PrimaryTitle text="Frontend Developer" />
          <SecondaryTitle text="RYKDevs (RYK, PK)" />
          <SecondaryTitle text="Jan 2018 – Sep 2019" />
          <PrimaryList>
            <PrimaryListItem
              text="Converted over 100 PSD designs into fully responsive and interactive front-end code using 
            HTML, CSS, and JavaScript, ensuring cross-browser compatibility and optimized user experiences."
            />
            <PrimaryListItem text="Developed and implemented admin dashboards with React" />
          </PrimaryList>
        </RightPanel>
      </Box>
    </Grid>
  );
};
