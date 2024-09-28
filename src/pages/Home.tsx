import { useState } from 'react';
import ProtectedRoute from "../wrapper/ProtectedRoute";
import Header from '../features/questions/Header';
import Question from '../features/questions/Question';

// Define the type for a skill
interface Skill {
  id: number;
  name: string;
  description: string;
}

const Home = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  // Skills data
  const skills: Skill[] = [
    { id: 1, name: "Information and Ideas", description: "Skill 1" },
    { id: 2, name: "Craft and Structure", description: "Skill 2" },
    { id: 3, name: "Expression of Ideas", description: "Skill 3" },
    { id: 4, name: "Standard English Conventions", description: "Skill 4" }
  ];

  // Handler for skill click
  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
  };

  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        <div className="w-96 flex flex-col p-10">
          {/* Content on the left side */}
          <div className="w-full h-14 py-2 cursor-pointer duration-500 hover:bg-gray-50 flex items-center space-x-2">
            <svg fill="#000000" height="35px" width="35px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 487.5 487.5" xmlSpace="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M437,12.3C437,5.5,431.5,0,424.7,0H126.3C84.4,0,50.4,34.1,50.4,75.9v335.7c0,41.9,34.1,75.9,75.9,75.9h298.5 c6.8,0,12.3-5.5,12.3-12.3V139.6c0-6.8-5.5-12.3-12.3-12.3H126.3c-28.3,0-51.4-23.1-51.4-51.4S98,24.5,126.3,24.5h298.5 C431.5,24.5,437,19,437,12.3z M126.3,151.8h286.2V463H126.3c-28.3,0-51.4-23.1-51.4-51.4V131.7 C88.4,144.2,106.5,151.8,126.3,151.8z"></path>
                    <path d="M130.5,64.8c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h280.1c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H130.5z"></path>
                    <path d="M178,397.7c6.3,2.4,13.4-0.7,15.8-7.1l17.9-46.8h62.7c0.5,0,0.9-0.1,1.3-0.1l17.9,46.9c1.9,4.9,6.5,7.9,11.4,7.9 c1.5,0,2.9-0.3,4.4-0.8c6.3-2.4,9.5-9.5,7.1-15.8l-54-141.2c-3-7.9-10.4-13-18.8-13c-8.4,0-15.8,5.1-18.8,13l-54,141.2 C168.5,388.2,171.7,395.2,178,397.7z M243.7,260l22.7,59.3h-45.3L243.7,260z"></path>
                  </g>
                </g>
              </g>
            </svg>
            <div className="flex-col">
              <p className="font-semibold text-[16px]">Reading SAT</p>
              <p className="uppercase text-[12px] text-gray-400">4 skills</p>
            </div>
          </div>

          <div className="mt-5">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className={`bg-blue-50 py-3 px-3 mb-2 cursor-pointer ${selectedSkill?.id === skill.id ? 'border-l-4 border-blue-500' : ''}`}
                onClick={() => handleSkillClick(skill)}
              >
                <p className="text-[11px] text-gray-400 uppercase">{skill.description}</p>
                <p className="text-[16px] font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>

          <div className="border border-gray-200 rounded-sm px-1.5 py-3 mt-8">
             <div className="flex items-center mb-0.5">
              <svg width="30px" height="30px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="idea"> <g id="idea_2"> <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M23 5V7C23 7.55228 23.4477 8 24 8C24.5523 8 25 7.55228 25 7V5C25 4.44772 24.5523 4 24 4C23.4477 4 23 4.44772 23 5ZM26.887 29.9786H21.123C19.4134 29.9786 18.005 31.3089 18.005 32.9786V41.3486C18.005 42.7823 19.2093 43.9206 20.669 43.9206H27.329C28.7887 43.9206 29.995 42.7823 29.995 41.3486L30.0019 35.5387C34.1757 33.3634 37.0002 28.9948 37.0002 24.0022C37.0002 16.8239 31.1785 11.0022 24.0002 11.0022C16.8206 11.0022 11.0002 16.8232 11.0002 24.0022C11.0002 27.1579 12.1289 30.1397 14.1464 32.4827C14.5068 32.9012 15.1382 32.9484 15.5567 32.588C15.9752 32.2276 16.0224 31.5962 15.662 31.1777C13.9541 29.1942 13.0002 26.6743 13.0002 24.0022C13.0002 17.9278 17.9252 13.0022 24.0002 13.0022C30.0739 13.0022 35.0002 17.9285 35.0002 24.0022C35.0002 27.846 33.0212 31.253 30.0047 33.2223L30.005 32.9818C30.005 31.3093 28.5971 29.9786 26.887 29.9786ZM28.0035 34.2527L28.005 32.9806C28.005 32.4399 27.517 31.9786 26.887 31.9786H21.123C20.4932 31.9786 20.005 32.4398 20.005 32.9786V41.3486C20.005 41.6517 20.2895 41.9206 20.669 41.9206H27.329C27.7092 41.9206 27.995 41.651 27.995 41.3474L28.0009 36.3762C27.0928 36.6692 26.1399 36.8655 25.154 36.9523C24.6038 37.0008 24.1185 36.5941 24.0701 36.044C24.0216 35.4938 24.4283 35.0085 24.9784 34.9601C26.0387 34.8666 27.0538 34.6236 28.0035 34.2527ZM41 23H43C43.5523 23 44 23.4477 44 24C44 24.5523 43.5523 25 43 25H41C40.4477 25 40 24.5523 40 24C40 23.4477 40.4477 23 41 23ZM7 23H5C4.44772 23 4 23.4477 4 24C4 24.5523 4.44772 25 5 25H7C7.55228 25 8 24.5523 8 24C8 23.4477 7.55228 23 7 23ZM10.0001 8.58589L11.4141 9.99989C11.8046 10.3904 11.8046 11.0236 11.4141 11.4141C11.0236 11.8046 10.3904 11.8046 9.99989 11.4141L8.58589 10.0001C8.19537 9.60958 8.19537 8.97642 8.58589 8.58589C8.97642 8.19537 9.60958 8.19537 10.0001 8.58589ZM38.0001 11.4141L39.4141 10.0001C39.8046 9.60958 39.8046 8.97642 39.4141 8.58589C39.0236 8.19537 38.3904 8.19537 37.9999 8.58589L36.5859 9.99989C36.1954 10.3904 36.1954 11.0236 36.5859 11.4141C36.9764 11.8046 37.6096 11.8046 38.0001 11.4141Z" fill="#000000"></path> </g> </g> </g></svg>
              <p className="font-medium uppercase text-[12px]">Course Challenge</p>
             </div>
             <p className="text-[12px] text-gray-400 mb-1">Challenge yourself, better yourself!</p>
             <p className="font-semibold text-sm text-blue-500 cursor-pointer">Start course challenge</p> 
          </div>
        </div>

        <div className="w-px bg-gray-200 h-full"></div>
        
        <div className="flex flex-grow p-10">
          {/* Content on the right side */}
          {selectedSkill ? (
            <div className="w-full">
              <div className="text-center mb-16">
                <Header name={selectedSkill.name}/>
              </div>
              <Question />
            </div>
          ) : (
            <div className="flex flex-col items-center flex-grow">
                <div className="mt-16 text-center">
                  <hr className="mx-8 my-5 h-px border-0 bg-gray-200" />
              </div>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Home;
