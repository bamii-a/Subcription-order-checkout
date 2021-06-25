// import React, {useState} from "react"

// type Subscription = {
//   duration: 3 | 6 | 12
//   gb: 5 | 10 | 50
//   isUpfrontPayment: boolean
// }

// type Step = 1 | 2 | 3

// type Type = "duration" | "gb" | "isUpfrontPayment"

// type SubscriptionNumber = 3 | 6 | 12 | 5 | 10 | 50

// export const App: React.FC = () => {

//   const [subscriptionObject, setSubscriptionObject] = useState<Subscription>({duration: 12, gb: 5, isUpfrontPayment: false})
//   const [step, setStep] = useState<Step>(1)

//   const handleSubscriptionType = (type: Type, value: SubscriptionNumber | boolean) => {
//     const newSubscriptionObject = {...subscriptionObject}
//     newSubscriptionObject[type] = value
//     setSubscriptionObject(newSubscriptionObject)
//   }

//   // <div style={"gb-btn-one"} onClick={() => handleSubscriptionType("duration", 5)}>5</div> 

//   return (
//     <div style={styles.container}>
//       <SubscriptionComponent step={step} subscriptionObject={subscriptionObject} handleSubscriptionType={handleSubscriptionType}/>
//       <Summary subscriptionObject={subscriptionObject}/>
//       <Navigation step={step} setStep={setStep}>
//     </div>
//   )
// }

// export default App