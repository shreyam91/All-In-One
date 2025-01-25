package com.shreyam.journalApp.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.shreyam.journalApp.entity.JournalEntity;

public interface JournalEntryRepository extends MongoRepository<JournalEntity,ObjectId> {

}
