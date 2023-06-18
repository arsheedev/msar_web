import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.regime_switching.markov_autoregression import MarkovAutoregression

# Load the dataset from a CSV file
data = pd.read_csv('data.csv')
values = data['CAR'].values

# Fit the MSAR model
model = MarkovAutoregression(values, k_regimes=2, order=1, switching_ar=True)
result = model.fit()

# Predict the regime probabilities
predictions = result.predict()
print(predictions)

# print(type(list(values)[100]), type(list(predictions)[100]))

# Plot the data and regime probabilities
# plt.figure(figsize=(10, 6))
# plt.plot(values, label='Data', color='blue')
# plt.plot(predictions, label='Predictions', color='red')
# plt.xlabel('Time')
# plt.ylabel('Value')
# plt.title('Markov Switching Autoregressive Model')
# plt.legend()
# plt.show()