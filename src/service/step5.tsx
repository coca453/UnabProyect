import APIS from "./apis";

export const getDeciles = async (flag: boolean) => {
  if (flag) {
    return {
      data: [
        {
          cantidad_personas: 1,
          deciles: [
            {
              id_decil: 1,
              numero_decil: 1,
              valor_desde: 0,
              valor_hasta: 69518,
            },
            {
              id_decil: 2,
              numero_decil: 2,
              valor_desde: 69518,
              valor_hasta: 109894,
            },
            {
              id_decil: 3,
              numero_decil: 3,
              valor_desde: 109910,
              valor_hasta: 145631,
            },
            {
              id_decil: 4,
              numero_decil: 4,
              valor_desde: 145686,
              valor_hasta: 181352,
            },
            {
              id_decil: 5,
              numero_decil: 5,
              valor_desde: 181388,
              valor_hasta: 221249,
            },
            {
              id_decil: 6,
              numero_decil: 6,
              valor_desde: 221250,
              valor_hasta: 278403,
            },
            {
              id_decil: 7,
              numero_decil: 7,
              valor_desde: 278439,
              valor_hasta: 353729,
            },
            {
              id_decil: 8,
              numero_decil: 8,
              valor_desde: 353765,
              valor_hasta: 476276,
            },
            {
              id_decil: 9,
              numero_decil: 9,
              valor_desde: 476278,
              valor_hasta: 774597,
            },
            {
              id_decil: 10,
              numero_decil: 10,
              valor_desde: 774684,
            },
          ],
        },
        {
          cantidad_personas: 2,
          deciles: [
            {
              id_decil: 1,
              numero_decil: 1,
              valor_desde: 0,
              valor_hasta: 139036,
            },
            {
              id_decil: 2,
              numero_decil: 2,
              valor_desde: 139036,
              valor_hasta: 219788,
            },
            {
              id_decil: 3,
              numero_decil: 3,
              valor_desde: 219820,
              valor_hasta: 291262,
            },
            {
              id_decil: 4,
              numero_decil: 4,
              valor_desde: 291372,
              valor_hasta: 362704,
            },
            {
              id_decil: 5,
              numero_decil: 5,
              valor_desde: 362776,
              valor_hasta: 442498,
            },
            {
              id_decil: 6,
              numero_decil: 6,
              valor_desde: 442500,
              valor_hasta: 556806,
            },
            {
              id_decil: 7,
              numero_decil: 7,
              valor_desde: 556878,
              valor_hasta: 707458,
            },
            {
              id_decil: 8,
              numero_decil: 8,
              valor_desde: 707530,
              valor_hasta: 952552,
            },
            {
              id_decil: 9,
              numero_decil: 9,
              valor_desde: 952556,
              valor_hasta: 1549194,
            },
            {
              id_decil: 10,
              numero_decil: 10,
              valor_desde: 1549368,
            },
          ],
        },
        {
          cantidad_personas: 3,
          deciles: [
            {
              id_decil: 1,
              numero_decil: 1,
              valor_desde: 0,
              valor_hasta: 208554,
            },
            {
              id_decil: 2,
              numero_decil: 2,
              valor_desde: 208554,
              valor_hasta: 329682,
            },
            {
              id_decil: 3,
              numero_decil: 3,
              valor_desde: 329730,
              valor_hasta: 436893,
            },
            {
              id_decil: 4,
              numero_decil: 4,
              valor_desde: 437058,
              valor_hasta: 544056,
            },
            {
              id_decil: 5,
              numero_decil: 5,
              valor_desde: 544164,
              valor_hasta: 663747,
            },
            {
              id_decil: 6,
              numero_decil: 6,
              valor_desde: 663750,
              valor_hasta: 835209,
            },
            {
              id_decil: 7,
              numero_decil: 7,
              valor_desde: 835317,
              valor_hasta: 1061187,
            },
            {
              id_decil: 8,
              numero_decil: 8,
              valor_desde: 1061295,
              valor_hasta: 1428828,
            },
            {
              id_decil: 9,
              numero_decil: 9,
              valor_desde: 1428834,
              valor_hasta: 2323791,
            },
            {
              id_decil: 10,
              numero_decil: 10,
              valor_desde: 2324052,
            },
          ],
        },
        {
          cantidad_personas: 4,
          deciles: [
            {
              id_decil: 1,
              numero_decil: 1,
              valor_desde: 0,
              valor_hasta: 278072,
            },
            {
              id_decil: 2,
              numero_decil: 2,
              valor_desde: 278072,
              valor_hasta: 439576,
            },
            {
              id_decil: 3,
              numero_decil: 3,
              valor_desde: 439640,
              valor_hasta: 582524,
            },
            {
              id_decil: 4,
              numero_decil: 4,
              valor_desde: 582744,
              valor_hasta: 725408,
            },
            {
              id_decil: 5,
              numero_decil: 5,
              valor_desde: 725552,
              valor_hasta: 884996,
            },
            {
              id_decil: 6,
              numero_decil: 6,
              valor_desde: 885000,
              valor_hasta: 1113612,
            },
            {
              id_decil: 7,
              numero_decil: 7,
              valor_desde: 1113756,
              valor_hasta: 1414916,
            },
            {
              id_decil: 8,
              numero_decil: 8,
              valor_desde: 1415060,
              valor_hasta: 1905104,
            },
            {
              id_decil: 9,
              numero_decil: 9,
              valor_desde: 1905112,
              valor_hasta: 3098388,
            },
            {
              id_decil: 10,
              numero_decil: 10,
              valor_desde: 3098736,
            },
          ],
        },
        {
          cantidad_personas: 5,
          deciles: [
            {
              id_decil: 1,
              numero_decil: 1,
              valor_desde: 0,
              valor_hasta: 347590,
            },
            {
              id_decil: 2,
              numero_decil: 2,
              valor_desde: 347590,
              valor_hasta: 549470,
            },
            {
              id_decil: 3,
              numero_decil: 3,
              valor_desde: 549550,
              valor_hasta: 728155,
            },
            {
              id_decil: 4,
              numero_decil: 4,
              valor_desde: 728430,
              valor_hasta: 906760,
            },
            {
              id_decil: 5,
              numero_decil: 5,
              valor_desde: 906940,
              valor_hasta: 1106245,
            },
            {
              id_decil: 6,
              numero_decil: 6,
              valor_desde: 1106250,
              valor_hasta: 1392015,
            },
            {
              id_decil: 7,
              numero_decil: 7,
              valor_desde: 1392195,
              valor_hasta: 1768645,
            },
            {
              id_decil: 8,
              numero_decil: 8,
              valor_desde: 1768825,
              valor_hasta: 2381380,
            },
            {
              id_decil: 9,
              numero_decil: 9,
              valor_desde: 2381390,
              valor_hasta: 3872985,
            },
            {
              id_decil: 10,
              numero_decil: 10,
              valor_desde: 3873420,
            },
          ],
        },
        {
          cantidad_personas: 6,
          deciles: [
            {
              id_decil: 1,
              numero_decil: 1,
              valor_desde: 0,
              valor_hasta: 417108,
            },
            {
              id_decil: 2,
              numero_decil: 2,
              valor_desde: 417108,
              valor_hasta: 659364,
            },
            {
              id_decil: 3,
              numero_decil: 3,
              valor_desde: 659460,
              valor_hasta: 873786,
            },
            {
              id_decil: 4,
              numero_decil: 4,
              valor_desde: 874116,
              valor_hasta: 1088112,
            },
            {
              id_decil: 5,
              numero_decil: 5,
              valor_desde: 1088328,
              valor_hasta: 1327494,
            },
            {
              id_decil: 6,
              numero_decil: 6,
              valor_desde: 1327500,
              valor_hasta: 1670418,
            },
            {
              id_decil: 7,
              numero_decil: 7,
              valor_desde: 1670634,
              valor_hasta: 2122374,
            },
            {
              id_decil: 8,
              numero_decil: 8,
              valor_desde: 2122590,
              valor_hasta: 2857656,
            },
            {
              id_decil: 9,
              numero_decil: 9,
              valor_desde: 2857668,
              valor_hasta: 4647582,
            },
            {
              id_decil: 10,
              numero_decil: 10,
              valor_desde: 4648104,
            },
          ],
        },
        {
          cantidad_personas: 7,
          deciles: [
            {
              id_decil: 1,
              numero_decil: 1,
              valor_desde: 0,
              valor_hasta: 486626,
            },
            {
              id_decil: 2,
              numero_decil: 2,
              valor_desde: 486626,
              valor_hasta: 769258,
            },
            {
              id_decil: 3,
              numero_decil: 3,
              valor_desde: 769370,
              valor_hasta: 1019417,
            },
            {
              id_decil: 4,
              numero_decil: 4,
              valor_desde: 1019802,
              valor_hasta: 1269464,
            },
            {
              id_decil: 5,
              numero_decil: 5,
              valor_desde: 1269716,
              valor_hasta: 1548743,
            },
            {
              id_decil: 6,
              numero_decil: 6,
              valor_desde: 1548750,
              valor_hasta: 1948821,
            },
            {
              id_decil: 7,
              numero_decil: 7,
              valor_desde: 1949073,
              valor_hasta: 2476103,
            },
            {
              id_decil: 8,
              numero_decil: 8,
              valor_desde: 2476355,
              valor_hasta: 3333932,
            },
            {
              id_decil: 9,
              numero_decil: 9,
              valor_desde: 3333946,
              valor_hasta: 5422179,
            },
            {
              id_decil: 10,
              numero_decil: 10,
              valor_desde: 5422788,
            },
          ],
        },
        {
          cantidad_personas: 8,
          deciles: [
            {
              id_decil: 1,
              numero_decil: 1,
              valor_desde: 0,
              valor_hasta: 556144,
            },
            {
              id_decil: 2,
              numero_decil: 2,
              valor_desde: 556144,
              valor_hasta: 879152,
            },
            {
              id_decil: 3,
              numero_decil: 3,
              valor_desde: 879280,
              valor_hasta: 1165048,
            },
            {
              id_decil: 4,
              numero_decil: 4,
              valor_desde: 1165488,
              valor_hasta: 1450816,
            },
            {
              id_decil: 5,
              numero_decil: 5,
              valor_desde: 1451104,
              valor_hasta: 1769992,
            },
            {
              id_decil: 6,
              numero_decil: 6,
              valor_desde: 1770000,
              valor_hasta: 2227224,
            },
            {
              id_decil: 7,
              numero_decil: 7,
              valor_desde: 2227512,
              valor_hasta: 2829832,
            },
            {
              id_decil: 8,
              numero_decil: 8,
              valor_desde: 2830120,
              valor_hasta: 3810208,
            },
            {
              id_decil: 9,
              numero_decil: 9,
              valor_desde: 3810224,
              valor_hasta: 6196776,
            },
            {
              id_decil: 10,
              numero_decil: 10,
              valor_desde: 6197472,
            },
          ],
        },
        {
          cantidad_personas: 9,
          deciles: [
            {
              id_decil: 1,
              numero_decil: 1,
              valor_desde: 0,
              valor_hasta: 625662,
            },
            {
              id_decil: 2,
              numero_decil: 2,
              valor_desde: 625662,
              valor_hasta: 989046,
            },
            {
              id_decil: 3,
              numero_decil: 3,
              valor_desde: 989190,
              valor_hasta: 1310679,
            },
            {
              id_decil: 4,
              numero_decil: 4,
              valor_desde: 1311174,
              valor_hasta: 1632168,
            },
            {
              id_decil: 5,
              numero_decil: 5,
              valor_desde: 1632492,
              valor_hasta: 1991241,
            },
            {
              id_decil: 6,
              numero_decil: 6,
              valor_desde: 1991250,
              valor_hasta: 2505627,
            },
            {
              id_decil: 7,
              numero_decil: 7,
              valor_desde: 2505951,
              valor_hasta: 3183561,
            },
            {
              id_decil: 8,
              numero_decil: 8,
              valor_desde: 3183885,
              valor_hasta: 4286484,
            },
            {
              id_decil: 9,
              numero_decil: 9,
              valor_desde: 4286502,
              valor_hasta: 6971373,
            },
            {
              id_decil: 10,
              numero_decil: 10,
              valor_desde: 6972156,
            },
          ],
        },
        {
          cantidad_personas: 10,
          deciles: [
            {
              id_decil: 1,
              numero_decil: 1,
              valor_desde: 0,
              valor_hasta: 695180,
            },
            {
              id_decil: 2,
              numero_decil: 2,
              valor_desde: 695180,
              valor_hasta: 1098940,
            },
            {
              id_decil: 3,
              numero_decil: 3,
              valor_desde: 1099100,
              valor_hasta: 1456310,
            },
            {
              id_decil: 4,
              numero_decil: 4,
              valor_desde: 1456860,
              valor_hasta: 1813520,
            },
            {
              id_decil: 5,
              numero_decil: 5,
              valor_desde: 1813880,
              valor_hasta: 2212490,
            },
            {
              id_decil: 6,
              numero_decil: 6,
              valor_desde: 2212500,
              valor_hasta: 2784030,
            },
            {
              id_decil: 7,
              numero_decil: 7,
              valor_desde: 2784390,
              valor_hasta: 3537290,
            },
            {
              id_decil: 8,
              numero_decil: 8,
              valor_desde: 3537650,
              valor_hasta: 4762760,
            },
            {
              id_decil: 9,
              numero_decil: 9,
              valor_desde: 4762780,
              valor_hasta: 7745970,
            },
            {
              id_decil: 10,
              numero_decil: 10,
              valor_desde: 7746840,
            },
          ],
        },
      ],
    };
  }
  return APIS.getDecilesPregrado();
};
