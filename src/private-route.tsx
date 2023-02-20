import { Typography } from "antd";

const PrivateRoute = ({
  children,
  authState,
  roles,
}: {
  children: JSX.Element;
  authState: any;
  roles: any;
}) => {
  const { isLoggedIn, CurrentUserRole } = authState;
  const loading = false;

  if (loading) {
    return <p>Checking authenticaton..</p>;
  }

  if (!isLoggedIn) {
    return (
      <Typography.Title
        level={3}
        style={{ marginTop: "2%", textAlign: "center" }}
      >
        Please login to continue.
      </Typography.Title>
    );
  }

  const userHasRequiredRole = roles.includes(CurrentUserRole) ? true : false;

  if (isLoggedIn && !userHasRequiredRole) {
    return (
      <Typography.Title
        level={3}
        style={{ marginTop: "2%", textAlign: "center" }}
      >
        401! Forbidden.
      </Typography.Title>
    );
  }

  return children;
};

export default PrivateRoute;
