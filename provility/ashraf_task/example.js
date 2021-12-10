selectedSubjects = [
    { subject_id: 711, topics: ["Test", "Test2"] },
    { subject_id: 712, topics: ["topic1", "Topic2"] }
]

theOtherSubjects = [
    {subject_id: 711, subject_name: "Science"},
    {subject_id: 712, subject_name: "Maths"}
] // fixed the ids as I supposed the should be the same, otherwise it makes no sense with the provided data

let mergedSubjects = selectedSubjects.map(subject => {
    let otherSubject = theOtherSubjects.find(element => element.subject_id === subject.subject_id)
    return { ...subject, ...otherSubject }
})