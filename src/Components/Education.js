import React from "react";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import "../Stylesheets/Education.css";

class Education extends React.Component {
    render() {
        return (
            <div>
                <div><p className="educationHeadline">My Education &amp; Qualifications</p></div>
                <div>
                    <Timeline align="left">
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography color="textSecondary">2021-2023</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color=""/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={2} className="paper">
                                    <Typography variant="h6" component="h1">
                                        MCA
                                    </Typography>
                                    <Typography>Chandigarh University</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography color="textSecondary">2019-2020</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color=""/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <Paper elevation={2} className="paper">
                                    <Typography variant="h6" component="h1">
                                        Full-Stack Certification
                                    </Typography>
                                    <Typography>UpGrad</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography color="textSecondary">2018-2021</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color=""/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            <Paper elevation={2} className="paper">
                                    <Typography variant="h6" component="h1">
                                        BCA
                                    </Typography>
                                    <Typography>Chandigarh University</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography color="textSecondary">2016-2018</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color=""/>
                            </TimelineSeparator>
                            <TimelineContent>
                            <Paper elevation={2} className="paper">
                                    <Typography variant="h6" component="h1">
                                        High School
                                    </Typography>
                                    <Typography>K.C. Public School</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        )
    }
}

export default Education;