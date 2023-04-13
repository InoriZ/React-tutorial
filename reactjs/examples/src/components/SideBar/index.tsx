import * as React from "react";
import { SideBarProps } from "./types";
import SideBarItem from "./SideBarItem";
import TopBoxTittle from "./topBoxTittle";
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import TagFacesIcon from '@mui/icons-material/TagFaces';

export default function SideBar(props: SideBarProps) {
  //Side Bar Item Dummy Data
  const [dummyData, setDummyData] = React.useState<SideBarProps[]>([]);

  const existingData: SideBarProps[] = [
    { id: 1, name: "Wanna", icon: <SentimentDissatisfiedIcon />, link: "#" },
    { id: 2, name: "Want", icon: <SentimentSatisfiedAltIcon />, link: "#" },
    { id: 3, name: "Want_To", icon: <TagFacesIcon />, link: "#" },
  ]
  //Use to call Api for dummyData or just use existing data.. ig
  React.useEffect(() => {
    setDummyData(existingData)
  }, []);
  
  return (
    <div
      className="side-bar-container"
      style={{
        backgroundColor: 'whitesmoke',
        minHeight: '100vh',
        top: 0,
        left: 0,
      }}>
      <div
        className="tittle"
        style={{
          fontSize: '2rem'
        }} >
        <TopBoxTittle id={0} name="Wanna Join?" />
      </div>
      {dummyData?.map((item: any) => {
        return (<div
          className="item"
          key={item?.id}
          style={{
            textAlign: 'left',
            marginTop: '50px'
          }}>
          <SideBarItem  {...item} />
        </div>)
      })}
    </div>
  );
}
