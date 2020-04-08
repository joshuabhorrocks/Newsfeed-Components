/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "Ipsum. Lorem Ipsum.",
    date: "Classified",
    firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem. Sit amet luctus venenatis lectus magna. Habitant morbi tristique senectus et netus et malesuada fames. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Magnis dis parturient montes nascetur ridiculus. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Nulla aliquet enim tortor at auctor urna nunc. In nibh mauris cursus mattis molestie. Netus et malesuada fames ac turpis egestas integer eget. Vivamus arcu felis bibendum ut tristique. Et magnis dis parturient montes nascetur ridiculus mus. Ut placerat orci nulla pellentesque dignissim.",

    secondParagraph: "Leo vel orci porta non pulvinar neque laoreet suspendisse. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Sit amet purus gravida quis. In hac habitasse platea dictumst quisque sagittis purus sit amet. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Nunc consequat interdum varius sit amet mattis vulputate. Morbi tristique senectus et netus et malesuada. Eget lorem dolor sed viverra. Semper feugiat nibh sed pulvinar proin. Ullamcorper eget nulla facilisi etiam dignissim diam. Mi eget mauris pharetra et ultrices. Est placerat in egestas erat imperdiet sed euismod.",

    thirdParagraph: "Neque egestas congue quisque egestas diam. Nisl nisi scelerisque eu ultrices vitae auctor. Nulla posuere sollicitudin aliquam ultrices sagittis orci. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Sem integer vitae justo eget magna. Amet nisl purus in mollis nunc sed. Lacus viverra vitae congue eu consequat ac felis. Ullamcorper malesuada proin libero nunc. Mauris vitae ultricies leo integer malesuada nunc vel risus. Congue eu consequat ac felis donec et odio."
  },
  {
    title: "LOREEEEEEEEEEEEEEEEEEM!!!",
    date: "Stardate: 8130.3",
    firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit aliquet sagittis id consectetur. Diam volutpat commodo sed egestas egestas fringilla. Aenean et tortor at risus viverra adipiscing at in. Egestas sed tempus urna et pharetra. Enim tortor at auctor urna. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Ornare lectus sit amet est placerat in egestas. Amet aliquam id diam maecenas. Congue quisque egestas diam in. Sociis natoque penatibus et magnis dis parturient montes. Ipsum a arcu cursus vitae. Enim blandit volutpat maecenas volutpat blandit. Nulla aliquet enim tortor at auctor urna nunc id cursus.",

    secondParagraph: "Velit euismod in pellentesque massa placerat duis ultricies lacus. Tellus mauris a diam maecenas sed. Eu scelerisque felis imperdiet proin. Dui id ornare arcu odio. Mattis aliquam faucibus purus in massa. Sit amet risus nullam eget. Augue mauris augue neque gravida in fermentum. Tortor id aliquet lectus proin. Venenatis urna cursus eget nunc. Blandit libero volutpat sed cras ornare. Lacinia quis vel eros donec ac odio. Viverra nibh cras pulvinar mattis nunc sed blandit. Habitant morbi tristique senectus et netus et. Id faucibus nisl tincidunt eget nullam non nisi est sit. Blandit aliquam etiam erat velit scelerisque. In eu mi bibendum neque.",

    thirdParagraph: "Sed odio morbi quis commodo odio aenean sed adipiscing diam. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Quisque id diam vel quam elementum pulvinar etiam. Nulla facilisi cras fermentum odio eu. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Habitasse platea dictumst quisque sagittis purus sit amet. Ultricies mi eget mauris pharetra. Auctor neque vitae tempus quam pellentesque. Elementum tempus egestas sed sed. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Nam aliquam sem et tortor consequat id porta nibh venenatis. Amet purus gravida quis blandit turpis cursus in hac."
  },
  {
    title: "One Lorem To Ipsum Them All",
    date: "The Third Age",
    firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Varius sit amet mattis vulputate enim nulla aliquet porttitor. Neque vitae tempus quam pellentesque nec nam. Ultricies lacus sed turpis tincidunt id aliquet risus. Est sit amet facilisis magna etiam tempor orci. Dictum at tempor commodo ullamcorper a. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Aenean sed adipiscing diam donec adipiscing. Risus quis varius quam quisque id diam vel quam elementum. Egestas dui id ornare arcu odio ut sem. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Augue neque gravida in fermentum et. Viverra vitae congue eu consequat ac felis donec et odio. Ac placerat vestibulum lectus mauris ultrices eros in. Egestas purus viverra accumsan in.",
    
    secondParagraph: "Morbi tempus iaculis urna id volutpat. Erat pellentesque adipiscing commodo elit at. Tellus molestie nunc non blandit massa enim. Velit laoreet id donec ultrices tincidunt arcu. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Congue quisque egestas diam in. Magna ac placerat vestibulum lectus. Eu nisl nunc mi ipsum. Ante metus dictum at tempor commodo ullamcorper a. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Urna cursus eget nunc scelerisque viverra. Maecenas ultricies mi eget mauris. Est velit egestas dui id ornare. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Eget arcu dictum varius duis. Purus in mollis nunc sed id semper risus in hendrerit. Sagittis aliquam malesuada bibendum arcu vitae elementum. Porta lorem mollis aliquam ut porttitor leo.",

    thirdParagraph: "Arcu risus quis varius quam quisque id. Ut sem nulla pharetra diam sit. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Et leo duis ut diam quam nulla. Diam maecenas ultricies mi eget mauris pharetra. Et tortor at risus viverra adipiscing at in tellus integer. Lectus proin nibh nisl condimentum id venenatis a. Pellentesque habitant morbi tristique senectus et. Id diam vel quam elementum. Etiam non quam lacus suspendisse. Massa id neque aliquam vestibulum morbi blandit cursus. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Consequat interdum varius sit amet mattis vulputate enim nulla aliquet. Cursus mattis molestie a iaculis at."
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/
function compCreator(title, date, firstParagraph, secondParagraph, thirdParagraph) {
  const article = document.createElement("div");
  const card = document.createElement("div");
  const titleh2 = document.createElement("h2");
  const dateNum = document.createElement("p");
  const firstP = document.createElement("p");
  const secondP = document.createElement("p");
  const thirdP = document.createElement("p");
  const button = document.createElement("span");

  article.append(card);
  card.append(titleh2);
  card.append(dateNum);
  card.append(firstP, secondP, thirdP);
  card.append(button);

  article.classList.add(".articles");
  card.classList.add("article");
  dateNum.classList.add("date");
  button.classList.add("expandButton");

  titleh2.textContent = title;
  dateNum.textContent = date;
  firstP.textContent = firstParagraph;
  secondP.textContent = secondParagraph;
  thirdP.textContent = thirdParagraph;
  button.textContent = "Expand/Minimize";

  button.addEventListener("click", () => {
    card.classList.toggle("article-open");
    button.classList.toggle("expandButton");
    button.classList.toggle("close");
  })

  return card;
}
const parent = document.querySelector(".articles");

data.map(x => {
  parent.append(compCreator(x.title, x.date, x.firstParagraph, x.secondParagraph, x.thirdParagraph))
})