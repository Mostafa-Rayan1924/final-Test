import Person from "./Person";

const Perons = ({ filterUsers }) => {
  let usersMap = filterUsers?.map((item) => (
    <Person key={item._id} item={item} />
  ));
  return (
    <div className="border-t pt-5 ">
      {filterUsers?.length == 0 ? (
        <h1 className="text-center text-lg">لا يوجد مستخدمين ...</h1>
      ) : (
        usersMap
      )}
    </div>
  );
};

export default Perons;
