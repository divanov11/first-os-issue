import "./style.css";
import contributors from "./contributors";
const contributorsContainer = document.getElementById("container-contributors");

const renderProfile = (profile) => {
    const profileCard = `<div class="contributor">
                        <strong>${profile.name}</strong>

                        <div>
                            <p>${profile.bio}</p>
                        </div>

                        <div class="socials--list">
                            ${profile.socials
                                .map((i) => {
                                    const username = i.username.replace(
                                        "@",
                                        ""
                                    );

                                    const platform =
                                        i.platform.charAt(0).toUpperCase() +
                                        i.platform.slice(1);

                                    switch (i.platform.toLowerCase()) {
                                        case "twitter":
                                            return `<a href="https://twitter.com/${username}" target="_blank">${platform}</a>`;
                                        case "linkedin":
                                            return `<a href="https://linkedin.com/in/${username}" target="_blank">${platform}</a>`;
                                        case "github":
                                            if (i.username) {
                                                return `<a href="https://github.com/${username}" target="_blank">${platform}</a>`;
                                            }

                                        default:
                                            return null;
                                    }
                                })
                                .join("")}


                        </div>
                    </div>`;

    contributorsContainer.insertAdjacentHTML("beforeend", profileCard);
};

function init() {
    contributors.forEach((profile) => {
        renderProfile(profile);
    });
}

init();
