window.onload = function () {
  const addMoreExperienceBtn = document.getElementById(
    "addmore"
  ) as HTMLButtonElement | null;
  const addMoreskillBtn = document.getElementById(
    "addmoreskill"
  ) as HTMLButtonElement | null;
  const addMoreEducationBtn = document.getElementById(
    "addmoreeducation"
  ) as HTMLButtonElement | null;
  const printPDFBtn = document.getElementById(
    "printPDF"
  ) as HTMLButtonElement | null;

  if (
    !addMoreExperienceBtn ||
    !addMoreskillBtn ||
    !addMoreEducationBtn ||
    !printPDFBtn
  ) {
    return;
  }

  addMoreExperienceBtn.addEventListener("click", addExperience);
  addMoreskillBtn.addEventListener("click", addnewskill);
  addMoreEducationBtn.addEventListener("click", addEducation);
  printPDFBtn.addEventListener("click", printPDF);

  function addExperience() {
    const newExperienceTextarea = document.createElement("textarea");
    newExperienceTextarea.placeholder = "Add More Experience";
    newExperienceTextarea.rows = 5;
    newExperienceTextarea.cols = 60;

    const experienceContainer = document.getElementById(
      "experience-container"
    ) as HTMLDivElement | null;
    if (experienceContainer) {
      experienceContainer.appendChild(newExperienceTextarea);
    } else {
      console.error("Experience container is missing");
    }
  }

  function addnewskill() {
    const moreskill = document.createElement("input");
    moreskill.placeholder = "Add More Skill";
    moreskill.type = "text";

    const skillContainer = document.getElementById(
      "skill-container"
    ) as HTMLDivElement | null;
    if (skillContainer) {
      skillContainer.appendChild(moreskill);
    } else {
      console.error("Skill container is missing");
    }
  }

  function addEducation() {
    const newEducationTextarea = document.createElement("textarea");
    newEducationTextarea.placeholder = "Add More Education";
    newEducationTextarea.rows = 5;
    newEducationTextarea.cols = 60;

    const educationContainer = document.getElementById(
      "education-container"
    ) as HTMLDivElement | null;
    if (educationContainer) {
      educationContainer.appendChild(newEducationTextarea);
    } else {
      console.error("Education container is missing");
    }
  }

  document
    .getElementById("resume-form")
    ?.addEventListener("submit", function (event) {
      event.preventDefault();
      const nameElement = document.getElementById(
        "name"
      ) as HTMLInputElement | null;
      const emailElement = document.getElementById(
        "email"
      ) as HTMLInputElement | null;
      const phoneElement = document.getElementById(
        "phone"
      ) as HTMLInputElement | null;
      const addressElement = document.getElementById(
        "address"
      ) as HTMLTextAreaElement | null;
      const initialEducationElement = document.getElementById(
        "education"
      ) as HTMLTextAreaElement | null;
      const initialExperienceElement = document.getElementById(
        "experience"
      ) as HTMLTextAreaElement | null;
      const initialSkillElement = document.getElementById(
        "skill"
      ) as HTMLInputElement | null;

      if (
        !nameElement ||
        !emailElement ||
        !phoneElement ||
        !addressElement ||
        !initialEducationElement ||
        !initialExperienceElement ||
        !initialSkillElement
      ) {
        console.error("One or more form elements are missing");
        return;
      }

      const experiences: string[] = [];
      const educations: string[] = [];
      const skills: string[] = [];

      if (initialEducationElement.value.trim()) {
        educations.push(initialEducationElement.value.trim());
      }

      const educationTextareas = document.querySelectorAll(
        "#education-container textarea"
      ) as NodeListOf<HTMLTextAreaElement>;
      educationTextareas.forEach((textarea) => {
        if (textarea.value.trim()) {
          educations.push(textarea.value.trim());
        }
      });

      if (initialExperienceElement.value.trim()) {
        experiences.push(initialExperienceElement.value.trim());
      }

      const experienceTextareas = document.querySelectorAll(
        "#experience-container textarea"
      ) as NodeListOf<HTMLTextAreaElement>;
      experienceTextareas.forEach((textarea) => {
        if (textarea.value.trim()) {
          experiences.push(textarea.value.trim());
        }
      });

      if (initialSkillElement && initialSkillElement.value.trim()) {
        skills.push(initialSkillElement.value.trim());
      }

      const skillInputs = document.querySelectorAll(
        "#skill-container input"
      ) as NodeListOf<HTMLInputElement>;
      skillInputs.forEach((input) => {
        if (input.value.trim()) {
          skills.push(input.value.trim());
        }
      });

      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const address = addressElement.value;

      const profilePicElement = document.getElementById(
        "ppic"
      ) as HTMLInputElement | null;
      let profilePicUrl = "";

      if (
        profilePicElement &&
        profilePicElement.files &&
        profilePicElement.files.length > 0
      ) {
        const profilePicFile = profilePicElement.files[0];
        profilePicUrl = URL.createObjectURL(profilePicFile);
      }

      const resumeOutput = `
      <h1>Resume</h1>
      <h2>Personal Information</h2>
      ${
        profilePicUrl
          ? `<img src="${profilePicUrl}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%;">`
          : ""
      }
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address || ""}</p>
      <h2>Education</h2>
      <ul>${educations.map((edu) => `<li>${edu}</li>`).join("")}</ul>
      <h2>Experience</h2>
      <ul>${experiences.map((exp) => `<li>${exp}</li>`).join("")}</ul>
      <h2>Skills</h2>
      <ul>${skills.map((skill) => `<li>${skill}</li>`).join("")}</ul>
    `;

      const resumeOutputElement = document.getElementById("resume-output");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove("hide");
      } else {
        console.error("Output element is missing");
      }
    });

  function printPDF() {
    const resumeOutputElement = document.getElementById("resume-output");
    if (resumeOutputElement) {
      const printWindow = window.open("", "", "width=800,height=600");
      if (printWindow) {
        printWindow.document.write(`
          <html>
          <head>
            <title>Print Resume</title>
          </head>
          <body>
            ${resumeOutputElement.innerHTML}
            <script>
              window.print();
              window.onafterprint = function() {
                window.close();
              };
            </script>
          </body>
          </html>
        `);
        printWindow.document.close();
      } else {
        console.error("Failed to open print window");
      }
    } else {
      console.error("Resume content is missing");
    }
  }
};

// URL generation and sharing functionality
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generateLink")?.addEventListener("click", () => {
    let userName = (
      document.getElementById("userName") as HTMLInputElement
    ).value.trim();
    if (userName) {
      const resumeUrl = `${window.location.origin}/resume/${encodeURIComponent(
        userName
      )}.pdf`;
      (document.getElementById("resumeLink") as HTMLInputElement).value =
        resumeUrl;
    } else {
      alert("Please enter your name");
    }
  });

  // Share Resume button to copy the unique link
  document.getElementById("shareResume")?.addEventListener("click", () => {
    const resumeLink = (
      document.getElementById("resumeLink") as HTMLInputElement
    ).value;
    if (resumeLink) {
      navigator.clipboard.writeText(resumeLink).then(
        () => {
          alert("Resume link copied to clipboard");
        },
        () => {
          alert("Failed to copy the link");
        }
      );
    } else {
      alert("Generate the link first");
    }
  });
});
