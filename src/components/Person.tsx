type PersonProps = {
  name: {
    firstName: String;
    lastName: String;
  };
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};
