'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {useState} from 'react'

export default function Home() {
  const [formulaireSoumis, setFormulaireSoumis] = useState(false) // devrait être false
  const [temps, setTemps] = useState(2) // devrait être 0

  const [activites, setActivites] = useState([
    {
      titre: 'Lire 80 000 hours',
      description: "Lire le guide de 80 000 hours permet d'avoir une vue plus claire sur sa carrière et de faire une grande différence avec sa carrière.",
      lien: 'https://80000hours.org/book',
      duree: 20,
      pris: false
    },
  {
    titre: 'Donner 10 % de ses revenus à une organisation efficace',
    description: "Allouer une partie de ses revenus à une organisation évaluée comme hautement efficace par GiveWell ou une autre source fiable pour maximiser l'impact.",
    lien: 'https://www.givingwhatwecan.org/',
    duree: 1,
    pris: false
  },
  {
    titre: 'Rechercher une cause à fort impact',
    description: "Prendre du temps pour analyser les causes mondiales (changements climatiques, santé mondiale, risques existentiels) et identifier celle où l'on peut le plus contribuer.",
    lien: 'https://80000hours.org/problem-profiles/',
    duree: 5,
    pris: false
  },
  {
    titre: 'Rejoindre une communauté d’altruisme efficace',
    description: "Participer à des rencontres locales ou en ligne pour échanger avec d'autres personnes intéressées par l'altruisme efficace, partager des idées et s'encourager mutuellement.",
    lien: 'https://www.effectivealtruism.org/',
    duree: 3,
    pris: false
  },
  {
    titre: 'Écrire un article ou une lettre pour sensibiliser à l’altruisme efficace',
    description: "Rédiger un article pour partager les idées de l'altruisme efficace et encourager d'autres personnes à s'engager pour des causes à fort impact.",
    lien: 'https://forum.effectivealtruism.org/',
    duree: 10,
    pris: false
  },
  {
    titre: 'Évaluer l’efficacité d’organisations caritatives',
    description: "Faire des recherches sur différentes organisations caritatives pour déterminer lesquelles ont l'impact le plus mesurable et significatif.",
    lien: 'https://www.givewell.org/',
    duree: 8,
    pris: false
  },
{
  titre: 'Devenir bénévole pour une association humanitaire',
  description: "S'engager dans une association locale ou internationale pour aider des communautés dans le besoin, par exemple via la distribution de nourriture ou l'accompagnement des personnes en difficulté.",
  lien: 'https://www.humanitarianresponse.info/',
  duree: 100,
  pris: false
},
{
  titre: 'Organiser un événement caritatif',
  description: "Planifier et organiser un événement (comme une collecte de fonds ou un tournoi sportif) pour soutenir une cause importante.",
  lien: 'https://www.guidestar.org/',
  duree: 80,
  pris: false
},
{
  titre: 'Apprendre une compétence pour aider les autres',
  description: "Prendre le temps de maîtriser une compétence comme le secourisme, afin de pouvoir intervenir efficacement en cas de besoin.",
  lien: 'https://www.croix-rouge.fr/',
  duree: 50,
  pris: false
},
{
  titre: 'Mentorer une personne en difficulté',
  description: "Accompagner quelqu'un (un étudiant, une personne en reconversion professionnelle, etc.) pour l'aider à atteindre ses objectifs.",
  lien: 'https://www.mentorat.fr/',
  duree: 60,
  pris: false
},
{
  titre: 'Participer à un projet de recherche citoyenne',
  description: "Collaborer avec des chercheurs sur des projets scientifiques ouverts, comme l'analyse de données ou des observations environnementales.",
  lien: 'https://www.zooniverse.org/',
  duree: 40,
  pris: false
},
{
  titre: 'Créer des ressources éducatives',
  description: "Écrire des articles, enregistrer des vidéos ou concevoir des cours en ligne pour transmettre vos connaissances gratuitement.",
  lien: 'https://www.khanacademy.org/',
  duree: 70,
  pris: false
},
{
  titre: 'Soutenir les personnes sans abri',
  description: "Passer du temps à discuter avec des personnes sans abri et leur fournir des repas, vêtements ou informations sur les services sociaux disponibles.",
  lien: 'https://www.emmaus-solidarite.org/',
  duree: 90,
  pris: false
},
{
  titre: 'Faire un volontariat dans un pays en développement',
  description: "Partir en mission pour aider à la construction d'écoles, l'enseignement, ou d'autres projets de développement.",
  lien: 'https://www.projects-abroad.fr/',
  duree: 200,
  pris: false
},
{
  titre: 'Planter des arbres pour lutter contre la déforestation',
  description: "S'investir dans des campagnes locales de reboisement en participant activement à des journées de plantation d'arbres.",
  lien: 'https://www.reforestaction.com/',
  duree: 50,
  pris: false
},
{
  titre: 'Traduire des documents pour des ONG',
  description: "Utiliser vos compétences linguistiques pour traduire des ressources essentielles pour des organisations à but non lucratif.",
  lien: 'https://translatorswithoutborders.org/',
  duree: 40,
  pris: false
}
  ])

  function submit() {
    setFormulaireSoumis(true)
    setTemps(tempsParAn(temps))
  }

  function revenirEnArriere() {
    setFormulaireSoumis(false)
  }

  function tempsParAn(heures: number) {
    const NOMBRE_SEMAINES_PAR_AN = 52
    return NOMBRE_SEMAINES_PAR_AN * heures
  }

  function activerActivite(n: number) {
    // si l'activité a déjà été sélectionnée
    if(activites[n].pris) return
    // si pas de temps disponible
    if(temps - activites[n].duree < 0) return

    const banane = activites
    banane[n].pris = true
    setActivites(banane)
    console.log(temps, activites[n].duree)
    setTemps(temps - activites[n].duree)
    console.log(activites[n])
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-5xl min-h-screen flex flex-col justify-center gap-8 py-20">
        <p className="font-black text-4xl">Simulateur de temps</p>
        {!formulaireSoumis && (
          <div className="flex flex-col gap-8">
            <p className="font-medium text-lg">Vous avez probablement plus de temps que vous ne le pensez - faites le test !</p>
            <div className="flex flex-col gap-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="time">Temps en <span className="underline">heure</span> disponible par semaine</Label>
                <div className="w-fit">
                  <Input className="py-6 font-bold" value={temps} type="text" id="time" placeholder="0" onInput={e => setTemps(parseInt((e.target as HTMLInputElement).value))} />
                </div>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-500/90 text-white py-6" onClick={() => submit()}>Je fais le test</Button>
            </div>
          </div>
        )}
        {formulaireSoumis && (
          <div className="flex flex-col gap-4">
            <p className="text-black/70 text-sm hover:cursor-pointer" onClick={() => revenirEnArriere()}>Changer son temps disponible</p>
            <p>Il vous reste le temps <span className="underline">chaque année</span> suivant à dépenser dans des projets altruistes :</p>
            <p className="text-7xl font-bold"><span className="text-blue-500">{temps}</span> <span className="font-extralight text-black/70">heures</span></p>
            <p>Dépensez-le comme vous le souhaitez !</p>
            <div className="pt-4 flex flex-wrap gap-4">
              {activites.map((activite, i) => (
                <div onClick={() => activerActivite(i)} key={i} className={"border rounded-2xl w-1/4 gap-2 grow aspect-square flex flex-col items-center justify-center p-4 "+(activites[i].pris?"bg-slate-200 cursor-default hover:bg-slate-200":"cursor-pointer hover:bg-slate-50")}>
                  <p className="font-medium text-wrap max-w-sm text-center">{activite.titre}</p>
                  <p className="font-light text-black/70 max-w-sm">{activite.duree} heure{activite.duree>1?"s":""}</p>
                </div>
              ))}
              {Array.from({ length: 3-activites.length%3 }, (_, i) => (
                <div key={i} className="grow w-1/4"></div>
              ))}
            </div>
          </div>
        )}
        <p className="italic text-black/70 text-sm">Ce projet est un mini-projet fait en environ 1h30. Le projet est loin d&apos;être complet et est <a className="underline" href="https://github.com/imbjdd/temps-disponible-altruiste" target="_blank">Open Source</a>.<br/>Si vous souhaitez proposer des idées, vous pouvez ouvrir une issue sur le <a className="underline" href="https://github.com/imbjdd/temps-disponible-altruiste" target="_blank">dépôt Github</a>, ou bien m&apos;envoyer un mail à l&apos;adresse e-mail <span className="text-blue-400">ouimoinon@proton.me</span> si vous n&apos;êtez pas familier avec ce charabia ou bien que vous souhaitez discuter avec moi. :)</p>
      </div>
    </div>
  );
}
