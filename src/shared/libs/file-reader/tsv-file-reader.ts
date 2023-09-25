import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, OfferType, OfferCity, OfferOption, UserRank } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, createdDate, city, preview, pictures, isPremium, isFavorite, rating, type,
        roomsAmount, guestsAmount, price, options, userName, email, avatarPath, password, rank, location]) => ({
        title,
        description,
        postDate: new Date(createdDate),
        city: OfferCity[city as keyof typeof OfferCity],
        preview,
        pictures: pictures.split(';'),
        isPremium: isPremium === 'true',
        isFavorite: isFavorite === 'true',
        rating: Number.parseFloat(rating),
        type: OfferType[type as keyof typeof OfferType],
        roomsAmount: Number.parseInt(roomsAmount, 10),
        guestsAmount: Number.parseInt(guestsAmount, 10),
        price: Number.parseInt(price, 10),
        options: options.split(';')
          .map((option) => OfferOption[option as keyof typeof OfferOption]),
        user: {
          name: userName,
          email,
          avatarPath,
          password,
          rank: UserRank[rank as keyof typeof UserRank]
        },
        commentsAmount: 0,
        location: {
          latitude: Number.parseFloat(location.split(';')[0]),
          longitude: Number.parseFloat(location.split(';')[1])
        }
      }));
  }
}
