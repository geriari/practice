let text: string = "A tofu születése. Néhány a Tang-kor közepéről származó kínai forrás említi először a tofut, egy legenda szerint pedig Liu An hercege, a Han- dinasztia alapítójának unokája találta fel a szójasajtot az i.e. 2 században. Valószerűbbnek tűnik az a történet, miszerint a herceg egy kolostor szerzetese által, egy taoista elvonulás során ismerkedett meg a tofuval. Annyira megízlett neki a vegetáriánus szentember találmánya, hogy az udvarba visszatérve elrendelte a tofu és a belőle készülő ételek rendszeresítését az udvar konyháján. Egy másik tudományos tézis szerint a Kínai birodalom északi területein portyázó közép-ázsiai nomád pásztornépek sajtkészítési hagyományainak mintájára született a tofu, a már jóval előtte, főleg levesként, italként fogyasztott szójatej felhasználásával. Japánba a Nara és a Heian- kor közötti időszakban került át a tofukészítés technikàja Kínát megjárt japán buddhista szerzetesek által és kezdetben természetesen a szerzetesi vegetáriánus konyhában  kapott szerepet . A tofut először megemlítő japán forrás 1183-ból származik, a Narában található Kaszuga Vakamija szentély feljegyzései között olvasható.";
let textToFind: string = "tofu";
let textToReplace: string = "cica";

function findAndReplace(text: string, find: string, replace: string): string {
  while (text.indexOf(find) !== -1) {
    text = text.substring(0, text.indexOf(find)) + replace + text.substring(text.indexOf(find) + find.length);
  }
  return text;
}

console.log(findAndReplace(text, textToFind, textToReplace));
