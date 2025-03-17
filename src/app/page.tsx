'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {useState} from 'react'
import Link from "next/link"
export default function Home() {
  const [formulaireSoumis, setFormulaireSoumis] = useState(false) // devrait être false
  const [temps, setTemps] = useState<number | null>(null) // devrait être 0

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
    titre: "Rejoindre une communauté d'altruisme efficace",
    description: "Participer à des rencontres locales ou en ligne pour échanger avec d'autres personnes intéressées par l'altruisme efficace, partager des idées et s'encourager mutuellement.",
    lien: 'https://www.effectivealtruism.org/',
    duree: 3,
    pris: false
  },
  {
    titre: "Écrire un article ou une lettre pour sensibiliser à l'altruisme efficace",
    description: "Rédiger un article pour partager les idées de l'altruisme efficace et encourager d'autres personnes à s'engager pour des causes à fort impact.",
    lien: 'https://forum.effectivealtruism.org/',
    duree: 10,
    pris: false
  },
  {
    titre: "Évaluer l'efficacité d'organisations caritatives",
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
    setTemps(null)
    for(let i = 0; i < activites.length; i++) {
      activites[i].pris = false
    }
    setActivites(activites)
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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-8">
          <div className="text-center py-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Maximisez votre impact sur le monde
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez comment vous pouvez faire une différence positive dans le monde en donnant de votre temps aux causes qui comptent.
            </p>
          </div>

          {!formulaireSoumis && (
            <div className="flex flex-col gap-8">
              <div className="bg-teal-600 text-white rounded-lg p-12 relative overflow-hidden">
                <div className="relative z-10 max-w-xl">
                  <h2 className="text-3xl font-semibold mb-4">
                    Vous avez <span className="italic">probablement</span> bien plus de temps que vous pensez... 
                  </h2>
                  <p className="text-teal-50 text-lg mb-6">
                    Commencez par indiquer combien d'heures par semaine vous pouvez consacrer à faire une différence.
                  </p>
                  <div className="flex flex-col items-begin gap-4 w-fit">
                    <div>
                      <Label htmlFor="time" className="text-white mb-2 block">Heures par semaine</Label>
                      <Input 
                        className="bg-white/10 placeholder:text-white/60 border-white/20 text-white placeholder-white/60 w-32"
                        value={temps || ''}
                        type="text"
                        id="time"
                        placeholder="0"
                        onInput={e => setTemps(parseInt((e.target as HTMLInputElement).value) || 0)}
                      />
                    </div>
                    <Button 
                      onClick={() => submit()}
                      className="bg-white text-teal-600 hover:bg-white/90 px-8"
                    >
                      Commencer
                    </Button>
                  </div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-40 h-40 border border-teal-400/20 rounded-full"></div>
                  <div className="w-56 h-56 border border-teal-400/10 rounded-full absolute"></div>
                  <div className="w-72 h-72 border border-teal-400/5 rounded-full absolute"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Pourquoi donner de son temps ?</h3>
                  <p className="text-gray-600">
                    En consacrant quelques heures par semaine à des causes importantes, vous pouvez avoir un impact significatif sur le monde. Chaque action compte, peu importe sa taille.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">Comment ça marche ?</h3>
                  <p className="text-gray-600">
                    Indiquez votre disponibilité hebdomadaire et découvrez une sélection d'activités adaptées à votre emploi du temps pour maximiser votre impact.
                  </p>
                </div>
              </div>
            </div>
          )}

          {formulaireSoumis && (
            <>
              <div className="flex items-center justify-between bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium text-lg">Temps restant annuel: {temps}h</span>
                </div>
                <Button
                  onClick={() => revenirEnArriere()}
                  className="bg-teal-600 text-white hover:bg-teal-700"
                >
                  Modifier le temps
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activites.map((activite, i) => (
                  <div
                    key={i}
                    onClick={() => activerActivite(i)}
                    className={`
                      p-6 rounded-lg border transition-all
                      ${activite.pris 
                        ? "bg-teal-50 border-teal-200" 
                        : "hover:border-teal-300 hover:shadow-sm cursor-pointer"}
                    `}
                  >
                    <h3 className="font-medium text-gray-900 mb-3 text-lg">{activite.titre}</h3>
                    <p className="text-gray-600 text-sm mb-4">{activite.description}</p>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{activite.duree}h</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        
          <footer className="text-center text-gray-500 text-sm space-y-2 mt-12 pt-8 border-t">
            <p>
              Ce projet est un mini-projet réalisé en environ 1h30. Il est 
              <a href="https://github.com/imbjdd/temps-disponible-altruiste" target="_blank" className="text-blue-600 hover:underline"> Open Source</a>.
            </p>
            <p>
              Pour toute suggestion ou discussion, contactez-moi à{' '}
              <span className="text-blue-600">ouimoinon@proton.me</span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
