// // // window.onload = function () {
// // //   const addMoreExperienceBtn = document.getElementById(
// // //     "addmore"
// // //   ) as HTMLButtonElement;
// // //   const addMoreskillBtn = document.getElementById(
// // //     "addmoreskill"
// // //   ) as HTMLButtonElement;
// // //   const addMoreEducationBtn = document.getElementById(
// // //     "addmoreeducation"
// // //   ) as HTMLButtonElement;
// // //   addMoreExperienceBtn.addEventListener("click", addExperience);
// // //   addMoreskillBtn.addEventListener("click", addnewskill);
// // //   addMoreEducationBtn.addEventListener("click", addEducation);
// // //   function addExperience() {
// // //     const newExperienceTextarea = document.createElement("textarea");
// // //     newExperienceTextarea.placeholder = "Add More Experience";
// // //     newExperienceTextarea.rows = 5;
// // //     newExperienceTextarea.cols = 60;
// // //     const experienceContainer = document.getElementById(
// // //       "experience-container"
// // //     ) as HTMLDivElement;
// // //     experienceContainer.appendChild(newExperienceTextarea);
// // //   }
// // //   function addnewskill() {
// // //     const moreskill = document.createElement("input");
// // //     moreskill.placeholder = "Add More Skill";
// // //     moreskill.type = "text";
// // //     const skillContainer = document.getElementById(
// // //       "skill-container"
// // //     ) as HTMLDivElement;
// // //     skillContainer.appendChild(moreskill);
// // //   }
// // //   function addEducation() {
// // //     const newEducationTextarea = document.createElement("textarea");
// // //     newEducationTextarea.placeholder = "Add More Education";
// // //     newEducationTextarea.rows = 5;
// // //     newEducationTextarea.cols = 60;
// // //     const educationContainer = document.getElementById(
// // //       "education-container"
// // //     ) as HTMLDivElement;
// // //     educationContainer.appendChild(newEducationTextarea);
// // //   }
// // //   document
// // //     .getElementById("resume-form")
// // //     ?.addEventListener("submit", function (event) {
// // //       event.preventDefault();
// // //       const nameElement = document.getElementById("name") as HTMLInputElement;
// // //       const emailElement = document.getElementById("email") as HTMLInputElement;
// // //       const phoneElement = document.getElementById("phone") as HTMLInputElement;
// // //       const addressElement = document.getElementById(
// // //         "address"
// // //       ) as HTMLTextAreaElement;
// // //       const initialEducationElement = document.getElementById(
// // //         "education"
// // //       ) as HTMLTextAreaElement;
// // //       const initialExperienceElement = document.getElementById(
// // //         "experience"
// // //       ) as HTMLTextAreaElement;
// // //       const initialSkillElement = document.getElementById(
// // //         "skill"
// // //       ) as HTMLInputElement;
// // //       const experiences: string[] = [];
// // //       const educations: string[] = [];
// // //       const skills: string[] = [];
// // //       if (initialEducationElement.value.trim()) {
// // //         educations.push(initialEducationElement.value.trim());
// // //       }
// // //       const educationTextareas = document.querySelectorAll(
// // //         "#education-container textarea"
// // //       ) as NodeListOf<HTMLTextAreaElement>;
// // //       educationTextareas.forEach((textarea) => {
// // //         if (textarea.value.trim()) {
// // //           educations.push(textarea.value.trim());
// // //         }
// // //       });
// // //       if (initialExperienceElement.value.trim()) {
// // //         experiences.push(initialExperienceElement.value.trim());
// // //       }
// // //       const experienceTextareas = document.querySelectorAll(
// // //         "#experience-container textarea"
// // //       ) as NodeListOf<HTMLTextAreaElement>;
// // //       experienceTextareas.forEach((textarea) => {
// // //         if (textarea.value.trim()) {
// // //           experiences.push(textarea.value.trim());
// // //         }
// // //       });
// // //       if (initialSkillElement && initialSkillElement.value.trim()) {
// // //         skills.push(initialSkillElement.value.trim());
// // //       }
// // //       const skillInputs = document.querySelectorAll(
// // //         "#skill-container input"
// // //       ) as NodeListOf<HTMLInputElement>;
// // //       skillInputs.forEach((input) => {
// // //         if (input.value.trim()) {
// // //           skills.push(input.value.trim());
// // //         }
// // //       });
// // //       const name = nameElement.value;
// // //       const email = emailElement.value;
// // //       const phone = phoneElement.value;
// // //       const address = addressElement.value;
// // //       const profilePicElement = document.getElementById(
// // //         "ppic"
// // //       ) as HTMLInputElement;
// // //       let profilePicUrl = "";
// // //       if (profilePicElement.files && profilePicElement.files.length > 0) {
// // //         const profilePicFile = profilePicElement.files[0];
// // //         profilePicUrl = URL.createObjectURL(profilePicFile);
// // //       }
// // //       const resumeOutput = `
// // //       <h1>Resume</h1>
// // //       <h2>Personal Information</h2>
// // //        ${
// // //          profilePicUrl
// // //            ? `<img src="${profilePicUrl}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%;">`
// // //            : ""
// // //        }
// // //       <p><strong>Name:</strong> ${name}</p>
// // //       <p><strong>Email:</strong> ${email}</p>
// // //       <p><strong>Phone:</strong> ${phone}</p>
// // //       <p><strong>Address:</strong> ${address || ""}</p>
// // //       <h2>Education</h2>
// // //       <ul>
// // //         ${educations.map((edu) => `<li>${edu}</li>`).join("")}
// // //       </ul>
// // //       <h2>Experience</h2>
// // //       <ul>
// // //         ${experiences.map((exp) => `<li>${exp}</li>`).join("")}
// // //       </ul>
// // //       <h2>Skills</h2>
// // //       <ul>
// // //         ${skills.map((skill) => `<li>${skill}</li>`).join("")}
// // //       </ul>
// // //     `;
// // //       const resumeOutputElement = document.getElementById("resume-output");
// // //       if (resumeOutputElement) {
// // //         resumeOutputElement.innerHTML = resumeOutput;
// // //         resumeOutputElement.classList.remove("hide");
// // //       } else {
// // //         console.error("Output element is missing");
// // //       }
// // //     });
// // // };
// // // function printPDF() {
// // //   const originalContents = document.body.innerHTML;
// // //   const resumeContents = document.getElementById("resume-output")?.outerHTML;
// // //   if (resumeContents) {
// // //     document.body.innerHTML = resumeContents;
// // //     window.print();
// // //     document.body.innerHTML = originalContents;
// // //   } else {
// // //     console.error("Resume content is missing");
// // //   }
// // // }
// window.onload = function () {
//   const addMoreExperienceBtn = document.getElementById("addmore") as HTMLButtonElement | null;
//   const addMoreskillBtn = document.getElementById("addmoreskill") as HTMLButtonElement | null;
//   const addMoreEducationBtn = document.getElementById("addmoreeducation") as HTMLButtonElement | null;
//   const printPDFBtn = document.getElementById("printPDF") as HTMLButtonElement | null;
//   if (!addMoreExperienceBtn || !addMoreskillBtn || !addMoreEducationBtn || !printPDFBtn) {
//     console.error("One or more buttons are missing in the HTML");
//     return;
//   }
//   addMoreExperienceBtn.addEventListener("click", addExperience);
//   addMoreskillBtn.addEventListener("click", addnewskill);
//   addMoreEducationBtn.addEventListener("click", addEducation);
//   printPDFBtn.addEventListener("click", printPDF);
//   function addExperience() {
//     const newExperienceTextarea = document.createElement("textarea");
//     newExperienceTextarea.placeholder = "Add More Experience";
//     newExperienceTextarea.rows = 5;
//     newExperienceTextarea.cols = 60;
//     const experienceContainer = document.getElementById("experience-container") as HTMLDivElement | null;
//     if (experienceContainer) {
//       experienceContainer.appendChild(newExperienceTextarea);
//     } else {
//       console.error("Experience container is missing");
//     }
//   }
//   function addnewskill() {
//     const moreskill = document.createElement("input");
//     moreskill.placeholder = "Add More Skill";
//     moreskill.type = "text";
//     const skillContainer = document.getElementById("skill-container") as HTMLDivElement | null;
//     if (skillContainer) {
//       skillContainer.appendChild(moreskill);
//     } else {
//       console.error("Skill container is missing");
//     }
//   }
//   function addEducation() {
//     const newEducationTextarea = document.createElement("textarea");
//     newEducationTextarea.placeholder = "Add More Education";
//     newEducationTextarea.rows = 5;
//     newEducationTextarea.cols = 60;
//     const educationContainer = document.getElementById("education-container") as HTMLDivElement | null;
//     if (educationContainer) {
//       educationContainer.appendChild(newEducationTextarea);
//     } else {
//       console.error("Education container is missing");
//     }
//   }
//   document.getElementById("resume-form")?.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const nameElement = document.getElementById("name") as HTMLInputElement | null;
//     const emailElement = document.getElementById("email") as HTMLInputElement | null;
//     const phoneElement = document.getElementById("phone") as HTMLInputElement | null;
//     const addressElement = document.getElementById("address") as HTMLTextAreaElement | null;
//     const initialEducationElement = document.getElementById("education") as HTMLTextAreaElement | null;
//     const initialExperienceElement = document.getElementById("experience") as HTMLTextAreaElement | null;
//     const initialSkillElement = document.getElementById("skill") as HTMLInputElement | null;
//     if (!nameElement || !emailElement || !phoneElement || !addressElement || !initialEducationElement || !initialExperienceElement || !initialSkillElement) {
//       console.error("One or more form elements are missing");
//       return;
//     }
//     const experiences: string[] = [];
//     const educations: string[] = [];
//     const skills: string[] = [];
//     if (initialEducationElement.value.trim()) {
//       educations.push(initialEducationElement.value.trim());
//     }
//     const educationTextareas = document.querySelectorAll("#education-container textarea") as NodeListOf<HTMLTextAreaElement>;
//     educationTextareas.forEach((textarea) => {
//       if (textarea.value.trim()) {
//         educations.push(textarea.value.trim());
//       }
//     });
//     if (initialExperienceElement.value.trim()) {
//       experiences.push(initialExperienceElement.value.trim());
//     }
//     const experienceTextareas = document.querySelectorAll("#experience-container textarea") as NodeListOf<HTMLTextAreaElement>;
//     experienceTextareas.forEach((textarea) => {
//       if (textarea.value.trim()) {
//         experiences.push(textarea.value.trim());
//       }
//     });
//     if (initialSkillElement && initialSkillElement.value.trim()) {
//       skills.push(initialSkillElement.value.trim());
//     }
//     const skillInputs = document.querySelectorAll("#skill-container input") as NodeListOf<HTMLInputElement>;
//     skillInputs.forEach((input) => {
//       if (input.value.trim()) {
//         skills.push(input.value.trim());
//       }
//     });
//     const name = nameElement.value;
//     const email = emailElement.value;
//     const phone = phoneElement.value;
//     const address = addressElement.value;
//     const profilePicElement = document.getElementById("ppic") as HTMLInputElement | null;
//     let profilePicUrl = "";
//     if (profilePicElement && profilePicElement.files && profilePicElement.files.length > 0) {
//       const profilePicFile = profilePicElement.files[0];
//       profilePicUrl = URL.createObjectURL(profilePicFile);
//     }
//     const resumeOutput = `
//       <h1>Resume</h1>
//       <h2>Personal Information</h2>
//       ${profilePicUrl ? `<img src="${profilePicUrl}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%;">` : ""}
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <p><strong>Address:</strong> ${address || ""}</p>
//       <h2>Education</h2>
//       <ul>${educations.map((edu) => `<li>${edu}</li>`).join("")}</ul>
//       <h2>Experience</h2>
//       <ul>${experiences.map((exp) => `<li>${exp}</li>`).join("")}</ul>
//       <h2>Skills</h2>
//       <ul>${skills.map((skill) => `<li>${skill}</li>`).join("")}</ul>
//     `;
//     const resumeOutputElement = document.getElementById("resume-output");
//     if (resumeOutputElement) {
//       resumeOutputElement.innerHTML = resumeOutput;
//       resumeOutputElement.classList.remove("hide");
//     } else {
//       console.error("Output element is missing");
//     }
//   });
//   function printPDF() {
//     const resumeOutputElement = document.getElementById("resume-output");
//     if (resumeOutputElement) {
//       const printWindow = window.open("", "", "width=800,height=600");
//       if (printWindow) {
//         printWindow.document.write(`
//           <html>
//           <head>
//             <title>Print Resume</title>
//           </head>
//           <body>
//             ${resumeOutputElement.innerHTML}
//             <script>
//               window.print();
//               window.onafterprint = function() {
//                 window.close();
//               };
//             </script>
//           </body>
//           </html>
//         `);
//         printWindow.document.close();
//       } else {
//         console.error("Failed to open print window");
//       }
//     } else {
//       console.error("Resume content is missing");
//     }
//   }
// };
// document.addEventListener('DOMContentLoaded', () => {
//   // Generate unique URL based on the name in the editable H1
//   document.getElementById('generateLink')?.addEventListener('click', () => {
//       let userName = (document.getElementById('userName') as HTMLElement).textContent?.trim();
//       if (userName) {
//           // Create a unique URL based on the user’s name
//           const resumeUrl = ${window.location.origin}/resume/${encodeURIComponent(userName)};
//           (document.getElementById('resumeLink') as HTMLInputElement).value = resumeUrl;
//       } else {
//           alert('Please enter your name');
//      }
//   });
// });
// // Share Resume button to copy the unique link
// document.getElementById('shareResume')?.addEventListener('click', () => {
//   const resumeLink = (document.getElementById('resumeLink') as HTMLInputElement).value;
//   if (resumeLink) {
//       navigator.clipboard.writeText(resumeLink).then(() => {
//           alert('Resume link copied to clipboard');
//       }, () => {
//           alert('Failed to copy the link');
//       });
//   } else {
//       alert('Generate the link first');
//   }
// });
window.onload = function () {
    var _a;
    var addMoreExperienceBtn = document.getElementById("addmore");
    var addMoreskillBtn = document.getElementById("addmoreskill");
    var addMoreEducationBtn = document.getElementById("addmoreeducation");
    var printPDFBtn = document.getElementById("printPDF");
    if (!addMoreExperienceBtn ||
        !addMoreskillBtn ||
        !addMoreEducationBtn ||
        !printPDFBtn) {
        console.error("One or more buttons are missing in the HTML");
        return;
    }
    addMoreExperienceBtn.addEventListener("click", addExperience);
    addMoreskillBtn.addEventListener("click", addnewskill);
    addMoreEducationBtn.addEventListener("click", addEducation);
    printPDFBtn.addEventListener("click", printPDF);
    function addExperience() {
        var newExperienceTextarea = document.createElement("textarea");
        newExperienceTextarea.placeholder = "Add More Experience";
        newExperienceTextarea.rows = 5;
        newExperienceTextarea.cols = 60;
        var experienceContainer = document.getElementById("experience-container");
        if (experienceContainer) {
            experienceContainer.appendChild(newExperienceTextarea);
        }
        else {
            console.error("Experience container is missing");
        }
    }
    function addnewskill() {
        var moreskill = document.createElement("input");
        moreskill.placeholder = "Add More Skill";
        moreskill.type = "text";
        var skillContainer = document.getElementById("skill-container");
        if (skillContainer) {
            skillContainer.appendChild(moreskill);
        }
        else {
            console.error("Skill container is missing");
        }
    }
    function addEducation() {
        var newEducationTextarea = document.createElement("textarea");
        newEducationTextarea.placeholder = "Add More Education";
        newEducationTextarea.rows = 5;
        newEducationTextarea.cols = 60;
        var educationContainer = document.getElementById("education-container");
        if (educationContainer) {
            educationContainer.appendChild(newEducationTextarea);
        }
        else {
            console.error("Education container is missing");
        }
    }
    (_a = document
        .getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault();
        var nameElement = document.getElementById("name");
        var emailElement = document.getElementById("email");
        var phoneElement = document.getElementById("phone");
        var addressElement = document.getElementById("address");
        var initialEducationElement = document.getElementById("education");
        var initialExperienceElement = document.getElementById("experience");
        var initialSkillElement = document.getElementById("skill");
        if (!nameElement ||
            !emailElement ||
            !phoneElement ||
            !addressElement ||
            !initialEducationElement ||
            !initialExperienceElement ||
            !initialSkillElement) {
            console.error("One or more form elements are missing");
            return;
        }
        var experiences = [];
        var educations = [];
        var skills = [];
        if (initialEducationElement.value.trim()) {
            educations.push(initialEducationElement.value.trim());
        }
        var educationTextareas = document.querySelectorAll("#education-container textarea");
        educationTextareas.forEach(function (textarea) {
            if (textarea.value.trim()) {
                educations.push(textarea.value.trim());
            }
        });
        if (initialExperienceElement.value.trim()) {
            experiences.push(initialExperienceElement.value.trim());
        }
        var experienceTextareas = document.querySelectorAll("#experience-container textarea");
        experienceTextareas.forEach(function (textarea) {
            if (textarea.value.trim()) {
                experiences.push(textarea.value.trim());
            }
        });
        if (initialSkillElement && initialSkillElement.value.trim()) {
            skills.push(initialSkillElement.value.trim());
        }
        var skillInputs = document.querySelectorAll("#skill-container input");
        skillInputs.forEach(function (input) {
            if (input.value.trim()) {
                skills.push(input.value.trim());
            }
        });
        var name = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var profilePicElement = document.getElementById("ppic");
        var profilePicUrl = "";
        if (profilePicElement &&
            profilePicElement.files &&
            profilePicElement.files.length > 0) {
            var profilePicFile = profilePicElement.files[0];
            profilePicUrl = URL.createObjectURL(profilePicFile);
        }
        var resumeOutput = "\n      <h1>Resume</h1>\n      <h2>Personal Information</h2>\n      ".concat(profilePicUrl
            ? "<img src=\"".concat(profilePicUrl, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius: 50%;\">")
            : "", "\n      <p><strong>Name:</strong> ").concat(name, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone, "</p>\n      <p><strong>Address:</strong> ").concat(address || "", "</p>\n      <h2>Education</h2>\n      <ul>").concat(educations.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(""), "</ul>\n      <h2>Experience</h2>\n      <ul>").concat(experiences.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(""), "</ul>\n      <h2>Skills</h2>\n      <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</ul>\n    ");
        var resumeOutputElement = document.getElementById("resume-output");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hide");
        }
        else {
            console.error("Output element is missing");
        }
    });
    function printPDF() {
        var resumeOutputElement = document.getElementById("resume-output");
        if (resumeOutputElement) {
            var printWindow = window.open("", "", "width=800,height=600");
            if (printWindow) {
                printWindow.document.write("\n          <html>\n          <head>\n            <title>Print Resume</title>\n          </head>\n          <body>\n            ".concat(resumeOutputElement.innerHTML, "\n            <script>\n              window.print();\n              window.onafterprint = function() {\n                window.close();\n              };\n            </script>\n          </body>\n          </html>\n        "));
                printWindow.document.close();
            }
            else {
                console.error("Failed to open print window");
            }
        }
        else {
            console.error("Resume content is missing");
        }
    }
};
// URL generation and sharing functionality
document.addEventListener("DOMContentLoaded", function () {
    var _a, _b;
    (_a = document.getElementById("generateLink")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var userName = document.getElementById("userName").value.trim();
        if (userName) {
            var resumeUrl = "".concat(window.location.origin, "/resume/").concat(encodeURIComponent(userName), ".pdf");
            document.getElementById("resumeLink").value =
                resumeUrl;
        }
        else {
            alert("Please enter your name");
        }
    });
    // Share Resume button to copy the unique link
    (_b = document.getElementById("shareResume")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        var resumeLink = document.getElementById("resumeLink").value;
        if (resumeLink) {
            navigator.clipboard.writeText(resumeLink).then(function () {
                alert("Resume link copied to clipboard");
            }, function () {
                alert("Failed to copy the link");
            });
        }
        else {
            alert("Generate the link first");
        }
    });
});
