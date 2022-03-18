import React from "react";
import {
  MenuContainer,
  MenuContent,
  MenuHead,
  MenuItem,
  MenuCard,
} from "./MenuStyled";
const Menu = ({ dietList }) => {
  console.log(dietList);
  return (
    <MenuContainer>
      <MenuCard>
        <MenuContent>
          <MenuHead>Breakfast</MenuHead>
          {dietList.breakfast.map((item, i) => (
            <MenuItem key={i}>-{item}</MenuItem>
          ))}
        </MenuContent>
      </MenuCard>
      <MenuCard>
        <MenuContent>
          <MenuHead>Launch</MenuHead>
          {dietList.launch.map((item, i) => (
            <MenuItem key={i}>-{item}</MenuItem>
          ))}
        </MenuContent>
      </MenuCard>
      <MenuCard>
        <MenuContent>
          <MenuHead>Dinner</MenuHead>
          {dietList.breakfast.map((item, i) => (
            <MenuItem key={i}>-{item}</MenuItem>
          ))}
        </MenuContent>
      </MenuCard>
    </MenuContainer>
  );
};

export default Menu;
