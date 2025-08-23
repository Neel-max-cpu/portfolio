import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { BriefcaseBusiness, GraduationCap, Hotel, Laptop, Repeat, School } from 'lucide-react';
import { IoFastFood } from 'react-icons/io5';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function CustomizedTimeline() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Timeline position={isMobile ? "right" : "alternate"}>
      {/* Job */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          April 2025 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          {/* <TimelineConnector /> */}
          <TimelineDot color="primary" variant="outlined">
            <BriefcaseBusiness />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {/* <Typography variant="h6" component="span"> */}
          <Typography
            variant="h6"
            component="span"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" }, wordBreak: "break-word" }}
          >
            Software Developer
          </Typography>
          <Typography className="text-gray-500 !text-sm sm:!text-xs">Novus Hi-Tech, Gurugram</Typography>
        </TimelineContent>
      </TimelineItem>


      {/* Masters */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2023-2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <GraduationCap />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {/* <Typography variant="h6" component="span"> */}
          <Typography
            variant="h6"
            component="span"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" }, wordBreak: "break-word" }}
          >
            Bhai Parmanand DSEU Shakarpur Campus-II, Delhi
          </Typography>
          <Typography className="text-gray-500 !text-sm sm:!text-xs">MCA - Masters Of Computer Application</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* 2nt internship */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          April 2024 - July 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <BriefcaseBusiness />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {/* <Typography variant="h6" component="span"> */}
          <Typography
            variant="h6"
            component="span"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" }, wordBreak: "break-word" }}
          >
            Teaching Assistant At Coding Ninjas, Remote
          </Typography>
          <Typography className="text-gray-500 !text-sm sm:!text-xs">Coding Ninjas</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* 1st internship */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          April 2024 - May 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <BriefcaseBusiness />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {/* <Typography variant="h6" component="span"> */}
          <Typography
            variant="h6"
            component="span"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" }, wordBreak: "break-word" }}
          >
            Backend Internship
          </Typography>
          <Typography className="text-gray-500 !text-sm sm:!text-xs">Bhai Parmanand DSEU Shakarpur Campus-II, Delhi</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* bachelors */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2020-2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <GraduationCap />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {/* <Typography variant="h6" component="span"> */}
          <Typography
            variant="h6"
            component="span"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" }, wordBreak: "break-word" }}
          >
            Darrang College, Tezpur
          </Typography>
          <Typography className="text-gray-500 !text-sm sm:!text-xs">BSc. in Mathematics with Honours</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* 12th */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2018-2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          {/* <TimelineDot color="primary" variant="outlined"> */}
          <TimelineDot color="secondary">
            <School />
          </TimelineDot>
          {/* <TimelineConnector sx={{ bgcolor: 'secondary.main' }} /> */}
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {/* <Typography variant="h6" component="span"> */}
          <Typography
            variant="h6"
            component="span"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" }, wordBreak: "break-word" }}
          >
            Darrang College, Tezpur
          </Typography>
          <Typography className="text-gray-500 !text-sm sm:!text-xs">Higer Secondary, 12<sup className="text-xs">th</sup></Typography>
        </TimelineContent>
      </TimelineItem>

      {/* schooling 10th */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2008-2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          {/* <TimelineConnector sx={{ bgcolor: 'secondary.main' }} /> */}
          <TimelineConnector />
          <TimelineDot color="secondary">
            <School />
          </TimelineDot>
          {/* <TimelineConnector /> */}
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          {/* <Typography variant="h6" component="span"> */}
          <Typography
            variant="h6"
            component="span"
            sx={{ fontSize: { xs: "1rem", sm: "1.25rem" }, wordBreak: "break-word" }}
          >
            Don Bosco High School, Tezpur
          </Typography>
          <Typography className="text-gray-500 !text-sm sm:!text-xs">Schooling, 10<sup className="text-xs">th</sup></Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}
