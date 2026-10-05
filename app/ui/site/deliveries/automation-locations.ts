export type AutomationLocation = {
  city: string;
  state: string;
  coordinates: [number, number];
  deliveries: number;
};

export const automationLocations: AutomationLocation[] = [
  { city: 'Cachoeirinha', state: 'RS', coordinates: [-29.9518, -51.0933], deliveries: 6 },
  { city: 'Gravataí', state: 'RS', coordinates: [-29.9441, -50.9919], deliveries: 7 },
  { city: 'Canoas', state: 'RS', coordinates: [-29.9178, -51.1836], deliveries: 1 },
  { city: 'Campo Bom', state: 'RS', coordinates: [-29.6783, -51.0544], deliveries: 1 },
  { city: 'Joinville', state: 'SC', coordinates: [-26.3044, -48.8487], deliveries: 2 },
  { city: 'São José dos Campos', state: 'SP', coordinates: [-23.2237, -45.9009], deliveries: 1 },
  { city: 'Suzano', state: 'SP', coordinates: [-23.5425, -46.3108], deliveries: 1 },
  { city: 'Osasco', state: 'SP', coordinates: [-23.5329, -46.7917], deliveries: 1 },
  { city: 'Luziânia', state: 'GO', coordinates: [-16.2525, -47.9503], deliveries: 1 },
  { city: 'Trindade', state: 'GO', coordinates: [-16.6495, -49.4888], deliveries: 1 },
  { city: 'Itajubá', state: 'MG', coordinates: [-22.4256, -45.4528], deliveries: 1 },
  { city: 'Simões Filho', state: 'BA', coordinates: [-12.7844, -38.4039], deliveries: 4 },
];

export const automationDeliveryCount = automationLocations.reduce(
  (total, location) => total + location.deliveries,
  0,
);