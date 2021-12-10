//filter
const studentDetails = [
    {
      name: "Abi",
      age: 26,
      city: "mannargudi",
    },
    {
      name: "indhu",
      age: 24,
      city: "thanjavur",
    },
    {
      name: "hemani",
      age: 20,
      city: "mannargudi",
    },
  ];
  const studentWithAge = studentDetails.filter((s) => {
    return s.city == "mannargudi";
  });
   console.log(studentWithAge);
  