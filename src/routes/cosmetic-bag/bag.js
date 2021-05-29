const BAG = {
  body: {
    id: 1,
    name: 'Уход за телом',
    list: {
      cleaning: {
        id: 1,
        name: 'Очищение',
        list: [
          { id: 1, name: 'Гель для душа с клубникой' },
          { id: 2, name: 'Гель для душа с малиной' }
        ]
      },
      cream: {
        id: 2,
        name: 'Крем',
        list: [
          { id: 3, name: 'Крем для тела' },
        ]
      },
      special: {
        id: 3,
        name: 'Специальный уход',
        list: [
          { id: 4, name: 'Скраб для тела' },
        ]
      }
    }
  },

  hair: {
    id: 2,
    name: 'Уход за волосами',
    list: {
      shampoo: {
        id: 1,
        name: 'Шампунь для волос',
        list: [
          { id: 5, name: 'Шампунь для объема' },
          { id: 6, name: 'Шампунь для кудрявых волос' }
        ]
      },
      balsam: {
        id: 2,
        name: 'Бальзам для волос',
        list: [
          { id: 7, name: 'Бальзам для волос' }
        ],
      },
      special: {
        id: 3,
        name: 'Специальный уход',
        list: [
          { id: 8, name: 'Скраб для кожи головы' },
          { id: 9, name: 'Маска для волос' }
        ]
      }
    }
  },

  face: {
    id: 3,
    name: 'Уход за лицом',
    list: {
      cleaning: {
        id: 1,
        name: 'Очищение',
        list: [
          { id: 10, name: 'Пенка для умывания' },
          { id: 11, name: 'Гель для умывания' }
        ]
      },
      cream: {
        id: 2,
        name: 'Крем для лица',
        list: [
          { id: 12, name: 'Крем для лица' },
          { id: 13, name: 'Крем для кожи вокруг глаз' },
          { id: 14, name: 'Крем с SPF' }
        ]
      },
      tonic: {
        id: 3,
        name: 'Тонизирование',
        list: [
          { id: 15, name: 'Тоник очищающий' },
          { id: 16, name: 'Тоник освежающий' }
        ]
      },
      mask: {
        id: 4,
        name: 'Маски',
        list: [
          { id: 17, name: 'Тканевая маска' },
          { id: 18, name: 'Глиняная маска' }
        ]
      },
      special: {
        id: 5,
        name: 'Специальный уход',
        list: [
          { id: 19, name: 'Пилинг с кислотами' },
          { id: 20, name: 'Сыворотка для лица' },
          { id: 21, name: 'Пилинг-скатка' }
        ]
      }
    }
  },
}

/**
 * Получение косметички
 * @param req - объект запроса express
 * @param res - объект ответа express
 */
const routeGetBag = (req, res) => {

  res.status(200).send(BAG);
};


module.exports = {
  routeGetBag,
};