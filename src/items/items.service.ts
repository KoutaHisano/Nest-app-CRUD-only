import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
	items: CreateItemDto[] = [];

	// 全取得
	findAll() {
		return this.items;
	}

	// 個別取得
	findOne(name: string) {
		const item = this.items.find(( item ) => item.name === name );
		return item;
	}

	// 新規作成
	create(item: CreateItemDto) {
		this.items.push(item);
		return item;
	}

	// 編集
	update(name: string, item: UpdateItemDto) {
		const updatedItem = this.items.find(( item ) => item.name === name );
		updatedItem.name = item.name;
		updatedItem.price = item.price;
		updatedItem.description = item.description;
    return updatedItem;
	}

	// 削除
	delete(name: string) {
		this.items = this.items.filter(( item ) => item.name !== name );
	}
}
