/**
 * Считает текущий возраст Unit по дате рождения этого Unit.
 */
export const calcCurrentOld = (birth: string): number => {
  if (birth) {
    const currenYears = new Date().getFullYear();
    const yearsOfUnitBirth = new Date(birth).getFullYear();

    const currentYearsOfUnitBirth = currenYears - yearsOfUnitBirth;

    return currentYearsOfUnitBirth;
  }

  console.warn(`Birth is ${birth}. Expected <string yyyy-mm-dd>`);

  return 0;
}