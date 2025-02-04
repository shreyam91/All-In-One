package com.shreyam.journalApp.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shreyam.journalApp.entity.JournalEntity;
import com.shreyam.journalApp.services.JournalServiceEntry;

@RestController
@RequestMapping("/journal")

public class JournalEntryControllerV2 {


    @Autowired
    private JournalServiceEntry journalServiceEntry;

    @GetMapping
    public ResponseEntity<?> getAll(){
        List<JournalEntity> all = journalServiceEntry.getAll(); 
        if(all != null && !all.isEmpty()){
            return new ResponseEntity<>(all,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<JournalEntity> createEntity(@RequestBody JournalEntity myEntity){
        try{
            myEntity.setDate(LocalDateTime.now());
            journalServiceEntry.saveEntry(myEntity);
            return new ResponseEntity<>(myEntity, HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/id/{myId}")
    public ResponseEntity<JournalEntity> getJournalById(@PathVariable ObjectId myId){
        Optional<JournalEntity> journalEntity = journalServiceEntry.findById(myId);
        if(journalEntity.isPresent()){
            return new ResponseEntity<>(journalEntity.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/id/{myId}")
    public ResponseEntity<?> deleteJournalById(@PathVariable ObjectId myId){
        journalServiceEntry.deleteById(myId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/id/{id}")
    public ResponseEntity<?> updateJournalById(@PathVariable ObjectId id, @RequestBody JournalEntity newEntity ){
        JournalEntity old = journalServiceEntry.findById(id).orElse(null);
        if(old != null){
            old.setContent(newEntity.getContent() != null && !newEntity.getContent().equals("") ? newEntity.getContent() : old.getContent());
            
            old.setTitle(newEntity.getTitle() != null && !newEntity.getTitle().equals("") ? newEntity.getTitle() : old.getTitle());

            journalServiceEntry.saveEntry(old);
            return new ResponseEntity<>(old, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
}
