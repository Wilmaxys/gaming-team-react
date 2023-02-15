import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// omit other imports
import { selectPlayers, fetchPlayersAsync } from "../../slices/serverSlice";
import {
  selectChannels,
  fetchChannelsAsync,
} from "../../slices/teamspeakSlice";
import SideBar from "../../components/sidebar/Sidebar";
import styles from "./Server.module.css";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PersonIcon from "@material-ui/icons/Person";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ExtensionIcon from "@material-ui/icons/Extension";
import ServerImage from "../../assets/images/server5.jpg";
import ServerImage2 from "../../assets/images/server4.jpg";
import ServerImage3 from "../../assets/images/server2.jpg";

const Server = () => {
  const dispatch = useDispatch();
  const players = useSelector(selectPlayers);
  const channels = useSelector(selectChannels);

  useEffect(() => {
    (async () => {
      await dispatch(fetchPlayersAsync());
      await dispatch(fetchChannelsAsync());
    })();
  }, [dispatch]);

  return (
    <>
      <SideBar />
      <div className={styles.container}>
        <div className={styles.header}>LVDLV</div>
        {/* {players.map(function (object, i) {
          return <div key={i}>{object}</div>;
        })} */}
        <div className={styles.content}>
          <div className={styles.title}>Nos serveurs</div>
          <div className={styles.grid_wrapper}>
            <div className={styles.grid_element}>
              <div className={styles.grid_header}>
                <img
                  src={ServerImage}
                  alt="Server"
                  className={styles.grid_header_image}
                />
              </div>
              <div className={styles.grid_content}>
                <div className={styles.description}>
                  <div className={styles.description_icon}>
                    <SportsEsportsIcon />
                  </div>
                  <div className={styles.description_container}>
                    <div className={styles.description_header}>Jeu</div>
                    <div className={styles.description_content}>
                      Counter-Strike: Source
                    </div>
                  </div>
                </div>
                <div className={styles.description}>
                  <div className={styles.description_icon}>
                    <ExtensionIcon />
                  </div>
                  <div className={styles.description_container}>
                    <div className={styles.description_header}>Mode de jeu</div>
                    <div className={styles.description_content}>Multimap</div>
                  </div>
                </div>
              </div>
              <div className={styles.grid_footer}>
                <div className={styles.grid_footer_ip}>54.36.127.125:27016</div>
                <a href="" className={styles.grid_footer_link}>
                  Join
                </a>
              </div>
            </div>
            <div className={styles.grid_element}>
              <div className={styles.grid_header}>
                <img
                  src={ServerImage}
                  alt="Server"
                  className={styles.grid_header_image}
                />
              </div>
              <div className={styles.grid_content}>
                <div className={styles.description}>
                  <div className={styles.description_icon}>
                    <SportsEsportsIcon />
                  </div>
                  <div className={styles.description_container}>
                    <div className={styles.description_header}>Jeu</div>
                    <div className={styles.description_content}>
                      Counter-Strike: Source
                    </div>
                  </div>
                </div>
                <div className={styles.description}>
                  <div className={styles.description_icon}>
                    <ExtensionIcon />
                  </div>
                  <div className={styles.description_container}>
                    <div className={styles.description_header}>Mode de jeu</div>
                    <div className={styles.description_content}>Multimap</div>
                  </div>
                </div>
              </div>
              <div className={styles.grid_footer}>
                <div className={styles.grid_footer_ip}>54.36.127.125:27016</div>
                <a href="" className={styles.grid_footer_link}>
                  Join
                </a>
              </div>
            </div>
            <div className={styles.grid_element}>
              <div className={styles.grid_header}>
                <img
                  src={ServerImage2}
                  alt="Server"
                  className={styles.grid_header_image}
                />
              </div>
              <div className={styles.grid_content}>
                <div className={styles.description}>
                  <div className={styles.description_icon}>
                    <SportsEsportsIcon />
                  </div>
                  <div className={styles.description_container}>
                    <div className={styles.description_header}>Jeu</div>
                    <div className={styles.description_content}>
                      Counter-Strike: Source
                    </div>
                  </div>
                </div>
                <div className={styles.description}>
                  <div className={styles.description_icon}>
                    <ExtensionIcon />
                  </div>
                  <div className={styles.description_container}>
                    <div className={styles.description_header}>Mode de jeu</div>
                    <div className={styles.description_content}>Multimap</div>
                  </div>
                </div>
              </div>
              <div className={styles.grid_footer}>
                <div className={styles.grid_footer_ip}>54.36.127.125:27016</div>
                <a href="" className={styles.grid_footer_link}>
                  Join
                </a>
              </div>
            </div>
            <div className={styles.grid_element}>
              <div className={styles.grid_header}>
                <img
                  src={ServerImage3}
                  alt="Server"
                  className={styles.grid_header_image}
                />
              </div>
              <div className={styles.grid_content}>
                <div className={styles.description}>
                  <div className={styles.description_icon}>
                    <SportsEsportsIcon />
                  </div>
                  <div className={styles.description_container}>
                    <div className={styles.description_header}>Jeu</div>
                    <div className={styles.description_content}>
                      Counter-Strike: Source
                    </div>
                  </div>
                </div>
                <div className={styles.description}>
                  <div className={styles.description_icon}>
                    <ExtensionIcon />
                  </div>
                  <div className={styles.description_container}>
                    <div className={styles.description_header}>Mode de jeu</div>
                    <div className={styles.description_content}>Multimap</div>
                  </div>
                </div>
              </div>
              <div className={styles.grid_footer}>
                <div className={styles.grid_footer_ip}>54.36.127.125:27016</div>
                <a href="" className={styles.grid_footer_link}>
                  Join
                </a>
              </div>
            </div>
          </div>
          <div className={styles.title}>Nos serveurs</div>
        </div>
      </div>
      <div className={styles.leftbar}>
        <div className={styles.donation_container}>
          <a href="">Faire une donation</a>
        </div>
        <div className={styles.teamspeak}>
          <div className={styles.teamspeak_titre}>TeamSpeak</div>
          <div className={styles.teamspeak_content}>
            {channels.map((channel, i) => {
              const itemClass = [styles.teamspeak_item];
              channel.clients.length && itemClass.push(styles.active);

              return (
                <div key={i}>
                  <div className={itemClass.join(" ")}>
                    <AssignmentIcon />
                    {channel.name}
                  </div>
                  <div className={styles.teamspeak_players}>
                    <ul>
                      {channel.clients?.map((client, i) => (
                        <li key={i}>
                          <PersonIcon />
                          {client}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Server;
