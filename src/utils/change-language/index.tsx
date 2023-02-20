import Select from "components/elements/select";
import resources from "assets/translation/resources";
import i18next from "i18next";

const ChangeLanguage = () => {
  const availLngs = Object.keys(resources);

  const onChangeLng = (lng: string) => {
    i18next.changeLanguage(lng)
  }

  return (
    <Select
      label="Change Language"
      option={availLngs}
      defaultValue={localStorage.getItem('i18nextLng') || availLngs[0]}
      onChange={onChangeLng}
    ></Select>
  );
};

export default ChangeLanguage;
