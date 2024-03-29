const birthdayDate: Date = new Date(1996, 8, 11);
const currentDate: Date = new Date();
let age = currentDate.getFullYear() - birthdayDate.getFullYear();
if (
    currentDate.getMonth() < birthdayDate.getMonth() ||
    (currentDate.getMonth() < birthdayDate.getMonth() &&
        currentDate.getDate() < birthdayDate.getDate())
) {
    age--;
}

export const Presentation = () => {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 my-16">
            <div className="h-96 mx-auto">
                <img
                    className="rounded-full w-72 h-80"
                    src={process.env.PUBLIC_URL + "me.png"}
                    alt=""
                />
            </div>
            <div className="h-32 rounded-lg lg:col-span-2">
                {" "}
                <h2 className="text-4xl font-serif text-title mx-10 underline">
                    Bonjour tout le monde, je suis Alexis, un passionné de {age}{" "}
                    ans !
                </h2>
                <p className="text-text text-l mx-10 my-4">
                    Suite à une reconversion professionnelle, j'ai décidé de me
                    tourner vers le monde du digital. J'ai donc commencé par
                    valider un titre de Développeur Web, puis celui de
                    Concepteur Développeur d'Applications. Dans mon envie
                    constante d'évolution, j'ai décidé de poursuivre ma
                    formation en alternance en tant qu'Expert en Systèmes
                    d'Information.
                </p>
                <p className="text-text text-l mx-10">
                    Parallèlement, je me consacre à un projet personnel : le
                    développement d'une application mobile dédiée au tourisme.
                </p>
            </div>
        </div>
    );
};
