export const getCurrentOld = (birth: any) => {
  const dateNow = new Date().getFullYear();
  const parseBirthDate = new Date(birth).getFullYear();

  const currenOld = dateNow - parseBirthDate;

  return currenOld;
}