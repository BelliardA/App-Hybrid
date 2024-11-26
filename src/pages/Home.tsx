import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar , IonInput, IonLabel, IonItem, IonButton} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import { useState } from 'react';
import './Home.css';
import { Crea } from '../plugins/stocks';

const Home: React.FC = () => {

  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState(''); // Pour afficher le nom retourné

  const handleShowSwiftUI = async (name: string) => {
    try {
      const result = await Crea.showSwiftUIView({ name });
      console.log("Nom soumis depuis SwiftUI :", result.name );
      setSubmittedName(result.name); // Met à jour l'état avec le nom renvoyé
    } catch (error) {
      console.error("Erreur :", error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleShowSwiftUI(name); // Appelle la vue SwiftUI avec le nom actuel
  };

  if(submittedName) {
    return (
      <IonPage> 
        <IonContent className="ion-padding">
        <IonTitle>Nom soumis : {submittedName}</IonTitle> 
        </IonContent>
      </IonPage>
    );
  }
  else{
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Name submit</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <form onSubmit={handleSubmit}>
            <IonItem>
              <IonLabel position="stacked">Nom</IonLabel>
              <IonInput
                value={name}
                onIonInput={(e) => setName(e.detail.value!)}
                required
              />
            </IonItem>
  
            <IonButton expand="full" type="submit">
              Soumettre
            </IonButton>
          </form>
        </IonContent>
      </IonPage>
    );
  }
  
};

export default Home;
