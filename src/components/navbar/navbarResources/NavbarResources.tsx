import ResourcesLinks from "./ResourcesLinks";

const NavbarResources = () => {
  return (
    <div className="lg:ml-10 flex gap-5 justify-center items-center lg:flex-row flex-col ">
      <ResourcesLinks link="https://docs.preswald.com/" resourceName="Docs" />
      <ResourcesLinks
        link="https://www.preswald.com/blog"
        resourceName="Blog"
      />
      <ResourcesLinks
        link="https://preswald-community.slack.com/join/shared_invite/zt-265ong01f-UHP6BP3FzvOmMQDIKty_JQ"
        resourceName="Community"
      />
    </div>
  );
};

export default NavbarResources;
