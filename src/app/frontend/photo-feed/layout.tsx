export default function rootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {props.modal}
      {props.children}
    </>
  );
}
