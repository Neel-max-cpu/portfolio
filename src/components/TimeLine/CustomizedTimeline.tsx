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
import { timeline } from '@/data/dataMaps';

export default function CustomizedTimeline() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const iconMap: Record<string, React.JSX.Element> = {
    "work": <BriefcaseBusiness />,
    "graduation": <GraduationCap />,
    "school": <School />,
  };

  return (    
    <Timeline position={isMobile ? "right" : "alternate"}>
      {timeline.map((item, i) => {
        const isFirst = i === 0;
        const isLast = i === timeline.length - 1;
        return (
          <TimelineItem 
            key={item.id}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay={`${i * 100}`}
          >
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {item.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              {/* above connector */}              
              {!isFirst && <TimelineConnector />}
              <TimelineDot color={item.icon === "school" ? "secondary" : "primary"} variant={item.icon === "work" ? "outlined" : "filled"}>
                {iconMap[item.icon]}
              </TimelineDot>
              {/* last connector */}
              {!isLast && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              {/* <Typography variant="h6" component="span"> */}
              <Typography
                variant="h6"
                component="span"
                sx={{ fontSize: { xs: "1rem", sm: "1.25rem" }, wordBreak: "break-word" }}
              >
                {item.title}
              </Typography>
              {item.icon === "school" ? (
                <Typography className="text-gray-500 !text-sm sm:!text-xs">
                  {item.subtitle}<sup className="!text-xs">th</sup>
                </Typography>
              ) : (
                <Typography className="text-gray-500 !text-sm sm:!text-xs">
                  {item.subtitle}
                </Typography>
              )}
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  );
}
