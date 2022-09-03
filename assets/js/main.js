import { getHellfirebaseClubSubscriptions,subscribeToHellfireClube } from './data/hellfire-clube.js'

(function main() {
    const txtName = document.getElementById('txtName')
    const txtEmail = document.getElementById('txtEmail')
    const txtLevel = document.getElementById('txtLevel')
    const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')
const suscriptionList = document.getElementById('subscriptions')

    btnSubscribe.addEventListener('click', async () => {
        const subscription = {
            name: txtName.value,
            email: txtEmail.value,
            level: txtLevel.value,
            character: txtCharacter.value
        }

        const subscritionId = await subscribeToHellfireClube(subscription)

        txtName.value = ''
        txtEmail.value = ''
        txtLevel.value = ''
        txtCharacter.value = ''
        
        alert(`Inscrito com sucesso: ${subscritionId}`)
    })
    
    async function loadData(){
        const subscriptions = await getHellfireClubSubscriptions()

        subscriptionsList.innerHTML = subscriptions.map(sub =>`        
        <li>
            ${sub.name}
        </li>

        `).join('');

        console.log(subscriptions)
    }

})