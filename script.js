const syllabus = {
    "1": [
        { code: "19HS101", name: "TECHNICAL ENGLISH - I", credits: 3 },
        { code: "19BS101", name: "MATHEMATICS - I", credits: 4 },
        { code: "19BS102", name: "ENGINEERING CHEMISTRY", credits: 3 },
        { code: "19GE101", name: "COMPUTER PROGRAMMING", credits: 3 },
        { code: "19GEM01", name: "ENGINEERING GRAPHICS", credits: 3 },
        { code: "19BS181", name: "ENGINEERING PHYSICS", credits: 4 },
        {code: "19GE151", name: "Computer Programming Laboratory", credits: 1.5},
        { code: "19GE152", name: "Engineering Practices Laboratory", credits: 1.5}
    ],
    "2": [
        { code: "19BS201", name: "MATHEMATICS - II", credits: 4 },
        { code: "19GE202", name: "ELECTRIC CIRCUITS AND ELECTRON DEVICES", credits: 4 },
        { code: "19BS281", name: "ENVIRONMENTAL SCIENCE AND DISASTER MANAGEMENT", credits: 4 },
        { code: "19HS201", name: "TECHNICAL ENGLISH - II", credits: 3 },
        { code: "19BS203", name: "MATERIALS SCIENCE", credits: 3 },
        { code: "19CS201", name: "OBJECT ORIENTED PROGRAMMING USING C++ AND PYTHON", credits: 3 },
        { code: "19CS252", name: "LINUX ADMINISTRATION AND SHELL PROGRAMMING LABORATORY", credits: 1.5 },
        { code: "19CS253", name: "OOP WITH C++ AND PYTHON LABORATORY", credits: 1.5 },
        { code: "19HS251", name: "COMMUNICATION SKILLS LABORATORY", credits: 1 }
    ],
    "3": [

        { code: "19MA303", name: "MATHEMATICS - III: DISCRETE MATHEMATICS", credits: 4 },
        { code: "19CS301", name: "DATA STRUCTURES AND ALGORITHMS", credits: 3 },
        { code: "19CS302", name: "DIGITAL PRINCIPLES AND SYSTEM DESIGN", credits: 3 },
        { code: "19CS303", name: "COMPUTER ORGANIZATION AND ARCHITECTURE", credits: 4 },
        { code: "19IT303", name: "PRINCIPLES OF COMMUNICATION", credits: 3.5 },
        { code: "19CS391", name: "PROGRAMMING WITH JAVA", credits: 4 },
        { code: "19CS351", name: "DATA STRUCTURES LABORATORY", credits: 1.5 },
        { code: "19CS352", name: "DIGITAL CIRCUITS LABORATORY", credits: 1.5 },
        { code: "19HSM01", name: "PRESENTATION AND LANGUAGE SKILLS LABORATORY", credits: 1 }
    ],
    "4": [
        { code: "19MA403", name: "MATHEMATICS - IV : PROBABILITY, QUEUEING THEORY AND STATISTICS", credits: 4 },
        { code: "19CS401", name: "MICROPROCESSORS AND MICRO CONTROLLERS", credits: 3 },
        { code: "19CS402", name: "THEORY OF COMPUTATION", credits: 4 },
        { code: "19CS403", name: "SOFTWARE ENGINEERING PRINCIPLES", credits: 3 },
        { code: "19CS404", name: "DATABASE SYSTEMS", credits: 3 },
        { code: "19CS481", name: "DESIGN AND ANALYSIS OF ALGORITHMS", credits: 4 }
    ],
    "5": [
        { code: "19CS501", name: "OPERATING SYSTEMS", credits: 3 },
        { code: "19CS502", name: "COMPUTER NETWORKS AND SECURITY", credits: 3 },
        { code: "19CS581", name: "COMPILER DESIGN", credits: 4 },
        { code: "Core Elective-1", name: "Core Elective-1 (BCS)", credits: 3 },
        { code: "UG Open Elective-1", name: "UG Open Elective-1", credits: 3 },
        { code: "UG Allied Elective-1", name: "UG Allied Elective-1", credits: 3 },
        { code: "19CS551", name: "OPERATING SYSTEMS LABORATORY", credits: 1.5 },
        { code: "19CS552", name: "NETWORKS LABORATORY", credits: 1.5 },
        { code: "19HSM02", name: "CAREER PLANNING AND PROFESSIONAL ESSENTIALS LABORATORY", credits: 1 },
        { code: "IAS50", name: "INTEGRATED APTITUDE SKILLS - I (HIGHER)", credits: 0 }
    ],
    "6": [
        { code: "19CS601", name: "HIGH PERFORMANCE COMPUTING", credits: 3 },
        { code: "19CS602", name: "DATA SCIENCE", credits: 3 },
        { code: "19CS603", name: "OBJECT ORIENTED ANALYSIS AND DESIGN", credits: 3 },
        { code: "Core Elective TCPC-1", name: "Core Elective TCPC-1 (BCS)", credits: 4 },
        { code: "UG Open Elective-2", name: "UG Open Elective-2", credits: 3 },
        { code: "UG Allied Elective-2", name: "UG Allied Elective-2", credits: 3 },
        { code: "19CS651", name: "DATA SCIENCE LABORATORY", credits: 1.5 },
        { code: "19CS652", name: "OBJECT ORIENTED ANALYSIS AND DESIGN LABORATORY", credits: 1.5 },
        { code: "IAS60", name: "INTEGRATED APTITUDE SKILLS - II (HIGHER)", credits: 0 }
    ],
    "7": [
        { code: "19CS701", name: "COMPUTATIONAL INTELLIGENCE", credits: 3 },
        { code: "19CS702", name: "IOT AND CLOUD", credits: 3 },
        { code: "Core Elective-2", name: "Core Elective-2 (BCS)", credits: 3 },
        { code: "Core Elective-3", name: "Core Elective-3 (BCS)", credits: 3 },
        { code: "Core Elective-4", name: "Core Elective-4 (BCS)", credits: 3 },
        { code: "UG Open Elective-3", name: "UG Open Elective-3", credits: 3 },
        { code: "19CS751", name: "COMPUTATIONAL INTELLIGENCE LABORATORY", credits: 1.5 },
        { code: "19CS752", name: "IOT AND CLOUD LABORATORY", credits: 1.5 }
    ],
    "8": [
        { code: "Core Elective-5", name: "Core Elective-5 (BCS)", credits: 3 },
        { code: "UG Open Elective-4", name: "UG Open Elective-4", credits: 3 },
        { code: "19CS851", name: "PROJECT WORK", credits: 9 }
    ]
};


const gradePoints = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "RA": 0,
    "SA": "-",
    "W": "-",
    "AU": "-",
    "AB": "-"
};

const semesterSelect = document.getElementById("semester");
const subjectTable = document.getElementById("subjectTable");
const calculateButton = document.getElementById("calculateButton");
const sgpaValue = document.getElementById("sgpaValue");

const cgpaValue = document.getElementById("cgpaValue");


semesterSelect.addEventListener("change", function () {
    const semester = semesterSelect.value;
    const subjects = syllabus[semester];

    if (semester === "") {
        subjectTable.style.display = "none";
        return;
    }

    const tbody = subjectTable.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    // Create separate arrays for theory subjects and laboratory subjects
    const theorySubjects = [];
    const labSubjects = [];

    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.code.includes("LABORATORY")) {
            labSubjects.push(subject);
        } else {
            theorySubjects.push(subject);
        }
    }

    // Sort theory subjects based on credits in descending order
    theorySubjects.sort((a, b) => b.credits - a.credits);

    // Merge theory and lab subjects array
    const mergedSubjects = [...theorySubjects, ...labSubjects];

    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let i = 0; i < mergedSubjects.length; i++) {
        const subject = mergedSubjects[i];
        const row = document.createElement("tr");

        const codeCell = document.createElement("td");
        codeCell.textContent = subject.code;
        row.appendChild(codeCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = subject.name;
        row.appendChild(nameCell);

        const creditsCell = document.createElement("td");
        creditsCell.textContent = subject.credits;
        row.appendChild(creditsCell);

        const gradeCell = document.createElement("td");
        const gradeSelect = document.createElement("select");

        // In the grade cell, the default option must be "Please Select", then only the user can select a grade from the dropdown
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.text = "Please Select";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        gradeSelect.appendChild(defaultOption);

        for (const grade in gradePoints) {
            const option = document.createElement("option");
            option.value = gradePoints[grade];
            option.text = grade;
            gradeSelect.appendChild(option);
        }

        gradeCell.appendChild(gradeSelect);
        row.appendChild(gradeCell);

        let gradePointCell = document.createElement("td");
        gradePointCell.textContent = "Grade Not Selected";
        row.appendChild(gradePointCell);

        gradeSelect.addEventListener("change", function ()
        {
            // Here the grade for the each subject is the grade point multiplied by the credits of the subject
            const selectedGrade = gradeSelect.value * subject.credits;
            if (selectedGrade === "") {
                gradePointCell.textContent = "Grade Not Selected";
            } else {
                gradePointCell.textContent = selectedGrade;
                // Update the grade point value in the subject object
                subject.gradePoint = parseFloat(selectedGrade);
                // Update the total grade points
                totalGradePoints = mergedSubjects.reduce((sum, subject) => sum + (subject.gradePoint || 0), 0);
                // Update the text content of the total grade points cell
                totalGradePointsCell.textContent = totalGradePoints;
            }
        });


        tbody.appendChild(row);
    }

    // Add 2 row elements for displaying total credits and total grade points in each row
    const totalRow = document.createElement("tr");

    const totalCreditsLabelCell = document.createElement("td");
    totalCreditsLabelCell.colSpan = 2;
    totalCreditsLabelCell.textContent = "Total Credits";
    totalRow.appendChild(totalCreditsLabelCell);

    let totalCreditsCell = document.createElement("td");
    // Find the total credits from the syllabus object
    for (let i = 0; i < subjects.length; i++) {
        totalCredits += subjects[i].credits;
    }
    totalCreditsCell.textContent = totalCredits;
    totalCreditsCell.style.backgroundColor = "lightgray";
    totalRow.appendChild(totalCreditsCell);

    const totalGradePointsLabelCell = document.createElement("td");
    totalGradePointsLabelCell.colSpan = 1;
    totalGradePointsLabelCell.textContent = "Total Grade Points";
    totalRow.appendChild(totalGradePointsLabelCell);

    let totalGradePointsCell = document.createElement("td");
    // Here find the sum of Grade Point column values and display it in the totalGradePointsCell element  whenever a grade is selected or changed, the total grade points must be updated
    totalGradePointsCell.textContent = totalGradePoints;

    totalGradePointsCell.style.backgroundColor = "lightgray";
    totalRow.appendChild(totalGradePointsCell);

    // These total text are bold and have a background color of lightgray to distinguish them from other rows in the table
    totalCreditsLabelCell.style.fontWeight = "bold";
    totalGradePointsLabelCell.style.fontWeight = "bold";


    tbody.appendChild(totalRow);

    subjectTable.style.display = "table";
    sgpaValue.textContent = "";
    calculateButton.disabled = false;

    // if the calculate button is clicked, the SGPA must be calculated and displayed in the SGPA value element with 3 decimal places
    calculateButton.addEventListener("click", function () {
        // handle the case where the user clicks the calculate button without selecting a grade for any subject and display an alert message
        // if totalGradePoints is 0, then no grade is selected for any subject, or else if the gradePointCell text content is "Grade Not Selected", then the user has not selected a grade for that subject yet
        if (totalGradePoints === 0 || totalGradePointsCell.textContent.includes("Grade Not Selected")) {
            alert("Please select a grade for all subjects!");
            return;
        } else {
            const sgpa = totalGradePoints / totalCredits;
            sgpaValue.textContent = sgpa.toFixed(3);
        }
    });
});
