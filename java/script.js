document.addEventListener('DOMContentLoaded', function() {
    // Butonat për të shfaqur më shumë informacion
    const toggleButtons = document.querySelectorAll('button[id^="toggle"]');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.id.replace('toggle', 'more');
            const targetDiv = document.getElementById(targetId);
            targetDiv.classList.toggle('hidden');
            this.textContent = targetDiv.classList.contains('hidden') ? 'Shfaq më shumë' : 'Fshih';
        });
    });

    // Kuiz
const kuizForm = document.getElementById('kuizForm');
const rezultatiDiv = document.getElementById('rezultati');
const piketParagrafi = document.getElementById('piket');

kuizForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Përgjigjet e sakta
    const pergjigjetSakta = {
        q1: 'a', q2: 'b', q3: 'a', q4: 'a', q5: 'b',
        q6: 'a', q7: 'c', q8: 'a', q9: 'a', q10: 'a',
        q11: 'b', q12: 'c', q13: 'a', q14: 'a', q15: 'a'
    };

    // Numërimi i përgjigjeve të sakta
    let piket = 0;
    const pergjigjetPerdoruesit = {
        q1: kuizForm.q1.value,
        q2: kuizForm.q2.value,
        q3: kuizForm.q3.value,
        q4: kuizForm.q4.value,
        q5: kuizForm.q5.value,
        q6: kuizForm.q6.value,
        q7: kuizForm.q7.value,
        q8: kuizForm.q8.value,
        q9: kuizForm.q9.value,
        q10: kuizForm.q10.value,
        q11: kuizForm.q11.value,
        q12: kuizForm.q12.value,
        q13: kuizForm.q13.value,
        q14: kuizForm.q14.value,
        q15: kuizForm.q15.value,
    };

    // Kontrollimi i përgjigjeve
    for (let key in pergjigjetSakta) {
        if (pergjigjetPerdoruesit[key] === pergjigjetSakta[key]) {
            piket++;
        }
    }

    // Shfaqja e rezultatit
    rezultatiDiv.classList.remove('hidden');
    piketParagrafi.textContent = `Ju keni ${piket} nga 15 përgjigje të sakta.`;

    // Resetimi i formës
    kuizForm.reset();
    });
});