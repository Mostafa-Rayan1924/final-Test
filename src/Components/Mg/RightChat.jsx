import { useContext, useEffect, useState } from "react";
import { CurrentChatContext } from "../../contexts/CurrentClickChat";
import Perons from "./Perons";
import SearchChat from "./SearchChat";
import axios from "axios";
import { authContext } from "../../contexts/Auth";
const RightChat = () => {
  let { currentChat } = useContext(CurrentChatContext);
  let { auth } = useContext(authContext);

  let [users, setUsers] = useState([]);
  const fetchUsers = () => {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get("https://mg-company.onrender.com/mg/users/getUser", {
        headers: headers,
      })
      .then((res) => {
        setUsers(res.data.Data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    let cancelTokenSource = null; // Variable to store the cancel token source

    const fetchData = async () => {
      cancelTokenSource = await fetchUsers(); // Call fetchUsers and store the cancel token source
    };

    fetchData();
    // Cleanup function
    return () => {
      if (cancelTokenSource) {
        cancelTokenSource.cancel("Component unmounted"); // Cancel the request when the component unmounts
      }
    };
  }, []);
  let filterUsers = users.filter((item) => item._id !== auth.user._id);
  function Search(word) {
    // body params for SEND msg
    if (word == "") {
      fetchUsers();
    } else {
      let headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      axios
        .get(
          `https://mg-company.onrender.com/mg/users/getOneUser?name=${word}`,
          {
            headers: headers,
          }
        )
        .then((res) => {
          setUsers(res.data.Data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
  return (
    <div
      className={`  ${currentChat !== "" ? "hidden" : "flex-col"} RightSec
      } h-full border-l sm:h-[450px] md:h-[550px] overflow-y-scroll w-full md:w-[30%] px-3 py-4`}>
      <SearchChat Search={Search} />
      <Perons filterUsers={filterUsers} />
    </div>
  );
};

export default RightChat;
