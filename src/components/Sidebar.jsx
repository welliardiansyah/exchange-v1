import React from "react";
import { Containers, ProfileContainer, Name, Links, Link, LinksContainer, AvatarSlider } from "../styled/styledGlobal";
import { RiStore2Fill, RiFileCopyLine, RiExchangeLine, RiLayoutColumnFill } from "react-icons/ri";
import AvatarImage from "../assets/logo.png";

function Sidebar() {
  return (
    <Containers>
      <ProfileContainer>
        <AvatarSlider src={AvatarImage} />
        <Name>NeoBit Tech</Name>
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiFileCopyLine />
            <h3>Contract</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Audit</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Whitepaper</h3>
          </Link>
          <Link>
            <RiExchangeLine />
            <h3>Swap</h3>
          </Link>
          <Link>
            <RiStore2Fill />
            <h3>Farm</h3>
          </Link>
          <Link>
            <RiLayoutColumnFill />
            <h3>Launchpad</h3>
          </Link>
        </Links>
      </LinksContainer>
    </Containers>
  );
}

export default Sidebar;
