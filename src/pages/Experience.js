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
          date="2010-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            JNTU,Hyderabad
          </h3>
          <p>Bacheolor in Technology,Computers</p>
        </VerticalTimelineElement>

        {/* Experience 01 */}
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="June 2014 to Sep 2017"
          iconStyle={{ background: "#B87333", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Amigos Software Solutions
          </h3>
          <p>Web Developer</p>
        </VerticalTimelineElement>

        
        {/* Experience 02 */}
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="Nov 2017 to July 2021"
          iconStyle={{ background: "#B87333  ", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            UBS,New York
          </h3>
          <p>Senior UI Developer</p>
        </VerticalTimelineElement>


                {/* Experience 03 */}
          <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="Sep 2021 to July 2023"
          iconStyle={{ background: "#3cb371 ", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Simmons Bank,Pine Bluff,AR
          </h3>
          <p>Senior UI Developer</p>
        </VerticalTimelineElement>
{/* Current Experience */}

               {/* Current Experience */}
               <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="July 2023 to Present"
          iconStyle={{ background: "#008080   ", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Cardinal Health,Remote
          </h3>
          <p>Senior UI Full Stack Developer</p>
        </VerticalTimelineElement>


      </VerticalTimeline>
    </div>
  );
}

export default Experience;
