import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from "@mui/icons-material/Work";
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2016-2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            NRI,Agaripally
          </h3>
          <p>Bacheolor in Technology,ECE</p>
        </VerticalTimelineElement>

        {/* Experience 01 */}
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="Dec 2020 to Nov 2022"
          iconStyle={{ background: "#B87333", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Cognizant Technology Solutions
          </h3>
          <p>Web Developer</p>
        </VerticalTimelineElement>

        
        {/* Experience 02 */}
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="Aug 2023 to June 2024"
          iconStyle={{ background: "#B87333  ", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lowes,TX
          </h3>
          <p>Full Stack UI Developer </p>
        </VerticalTimelineElement>


               {/* Current Experience */}
               <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="July 2024 to Present"
          iconStyle={{ background: "#008080   ", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Truist,Remote
          </h3>
          <p>Senior UI Developer</p>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  );
}

export default Experience;
