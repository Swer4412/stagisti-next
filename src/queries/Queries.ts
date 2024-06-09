export function Query(path: string) {
  return `query MyQuery {
  all${path}Models {
    title
    body {
      ... on ImmagineRecord {
        immagine {
          url
        }
      }
      ... on LinkRecord {
        link {
          ... on ErroriModelRecord {
            title
            _modelApiKey
          }
          ... on SetupModelRecord {
            title
            _modelApiKey
          }
          ... on WindowsModelRecord {
            title
            _modelApiKey
          }
          ... on AltroModelRecord {
            title
            _modelApiKey
          }
          ... on CuriositaModelRecord {
            title
            _modelApiKey
          }
          ... on HardwareModelRecord {
            title
            _modelApiKey
          }
        }
        descrizioneLink
      }
      ... on ListRecord {
        id
        list {
          listElement
        }
      }
      ... on SottotitoloRecord {
        subtitle
      }
      ... on TestoRecord {
        testo
      }
    }
  }
}`;
}


export const HomeQuery = `query MyQuery {
    homeModel {
      title
      body {
        ... on ImmagineRecord {
          immagine {
            url
          }
        }
        ... on LinkRecord {
          link {
            ... on AltroModelRecord {
              title
              _modelApiKey
            }
            ... on CuriositaModelRecord {
              title
              _modelApiKey
            }
            ... on ErroriModelRecord {
              title
              _modelApiKey
            }
            ... on HardwareModelRecord {
              title
              _modelApiKey
            }
            ... on SetupModelRecord {
              title
              _modelApiKey
            }
            ... on WindowsModelRecord {
              title
              _modelApiKey
            }
          }
        }
        ... on ListRecord {
          id
          list {
            listElement
          }
        }
        ... on SottotitoloRecord {
          subtitle
        }
        ... on TestoRecord {
          testo
        }
      }
    }
  }`