from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from statsmodels.tsa.regime_switching.markov_autoregression import MarkovAutoregression
from model import DataModel

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/predict")
def predict_regime_probabilities(data: DataModel):
    index = ['car', 'roa', 'npf', 'net', 'fdr', 'bopo', 'nom', 'apyd', 'stm']
    response = {
        'car': data.car,
        'roa': data.roa,
        'npf': data.npf,
        'net': data.net,
        'fdr': data.fdr,
        'bopo': data.bopo,
        'nom': data.nom,
        'apyd': data.apyd,
        'stm': data.stm
    }
    for i in range(len(index)):
        model = MarkovAutoregression(response[index[i]], k_regimes=2, order=1, switching_ar=True)
        result = model.fit()
        predictions = result.predict()
        response[index[i]] = predictions.tolist()
    return response