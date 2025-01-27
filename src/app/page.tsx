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
                <div onClick={() => activerActivite(i)} key={i} className={"border rounded-2xl w-1/4 hover:bg-slate-50 gap-2 grow aspect-square flex flex-col items-center justify-center p-4 "+(activites[i].pris?"bg-slate-200 cursor-default hover:bg-slate-200":"cursor-pointer")}>
                  <p className="font-medium text-wrap max-w-sm text-center">{activite.titre}</p>
                  <p className="font-light text-black/70 max-w-sm">{activite.duree} heure{activite.duree>1?"s":""}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
