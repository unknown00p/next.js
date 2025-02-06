export default async function register() {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("wait here");
    }, 2000)
  );
  return (
    <>
      <h2>register</h2>

      <h3>lol</h3>
    </>
  );
}
