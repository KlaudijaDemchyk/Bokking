    const mainPerson = "Corwin";
    const king = "Oberon";
    const kingdom = "Amber";
    const daughtersKing = ["Florimel","Deirdre","Fiona","Llewella","Coral"];
    const countdaughtersKing = daughtersKing.length;
    const listofdaughtersKing = daughtersKing.map(daughtersKing => " " + daughtersKing);
    const sonsKing = ["Benedict","Corwin","Eric","Caine","Bleys","Brand","Julian","Gérard","Random"];
    const countsonsking = sonsKing.length;
    const localityKindom = {
    forests: "Arden",
    city: "Narwin",
    sea: "Rebma"
}
    document.body.innerHTML = `<p style="text-align: center;" >The Chronicles of <span class ="accent ">${kingdom}</p></span>
<p>The Chronicles of <span class ="accent "> ${mainPerson}</span> follows the adventures of the royal family of <span class ="accent ">${kingdom}</span>, focusing primarily on <span class ="accent ">${mainPerson}</span>, one of the sons of <span class ="accent ">${king}</span>, the king of <span class ="accent ">${kingdom}</span>. </p>
<p>He has <span class ="accent ">${countdaughtersKing}</span> daughters are <span class ="accent ">${listofdaughtersKing}</span>  but the major players of the novel are the <span class ="accent ">${countsonsking}</span> princes of the title:</p>
<ul>
    <li>
        <span class ="accent ">${sonsKing[0]}</span>. The oldest surviving prince, uninvolved in the current struggle for the crown, he is the master tactician of the family and a man who seldom smiles. He is presumed to be dead by the rest of the family.
    </li>
    <li>
        <span class ="accent ">${sonsKing[1]}</span>. The protagonist. A cross between a cruel rogue and a reluctant poet, his years on Earth seem to have softened him somewhat: "And remember who it was who gave you your life where another would have taken it".
    </li>
    <li>
        <span class ="accent ">${sonsKing[2]}</span>. The arrogant yet competent would-be king of Amber; he commands the loyalty of <span class ="accent ">${sonsKing[6]}</span>, <span class ="accent ">${sonsKing[3]}</span> and <span class ="accent ">${sonsKing[7]}</span>.
    </li>
    <li>
        <span class ="accent ">${sonsKing[3]}</span>. Calculating and realistic.
    </li>
    <li>
        <span class ="accent ">${sonsKing[4]}</span>. Dashing and charming; <span class ="accent ">${sonsKing[1]}'s</span> other ally in his fight against <span class ="accent ">${sonsKing[2]}</span>.
    </li>
    <li>
        <span class ="accent ">${sonsKing[5]}</span>. Like <span class ="accent ">${king}</span>, mysteriously unavailable.
    </li>
    <li>
        <span class ="accent ">${sonsKing[6]}</span>. A sinister hunter.
    </li>
    <li>
        <span class ="accent ">${sonsKing[7]}</span>. Physically strongest of the nine, affable and liked even by his enemies.
    </li>
    <li>
        <span class ="accent ">${sonsKing[8]}.</span> A sneaky rascal albeit <span class ="accent ">${sonsKing[1]}'s</span> ally. A gambler and the youngest of <span class ="accent ">${king}'s</span> children.
    </li>
</ul>
<p>As they journey through the mysterious forests of <span class ="accent ">${localityKindom.forests}</span>, the ruined city of <span class ="accent ">${localityKindom.city}</span>, and the sea-drenched world of <span class ="accent ">${localityKindom.sea}</span>, they uncover ancient secrets and face off against various foes.</p>
<p>Along the way, they must find a way to restore peace and harmony to both <span class ="accent ">${mainPerson}</span> and the kingdom of <span class ="accent ">${kingdom}.</span></p>
`