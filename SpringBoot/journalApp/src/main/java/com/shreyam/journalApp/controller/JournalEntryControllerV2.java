package com.shreyam.journalApp.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<JournalEntity> getAll(){
        return journalServiceEntry.getAll();
    }

    @PostMapping
    public JournalEntity createEntity(@RequestBody JournalEntity myEntity){
        myEntity.setDate(LocalDateTime.now());
        journalServiceEntry.saveEntry(myEntity);
        return myEntity;
    }

    @GetMapping("/id/{myId}")
    public JournalEntity getJournalById(@PathVariable ObjectId myId){
        return journalServiceEntry.findById(myId).orElse(null);
    }

    @DeleteMapping("/id/{myId}")
    public boolean deleteJournalById(@PathVariable ObjectId myId){
        journalServiceEntry.deleteById(myId);
        return true;
    }

    @PutMapping("/id/{id}")
    public JournalEntity updateJournalById(@PathVariable ObjectId id, @RequestBody JournalEntity newEntity ){
        JournalEntity old = journalServiceEntry.findById(id).orElse(null);
        if(old != null){
            old.setContent(newEntity.getContent() != null && newEntity.getContent().equals("") ? newEntity.getContent() : old.getContent());
            
            old.setTitle(newEntity.getTitle() != null && newEntity.getTitle().equals("") ? newEntity.getTitle() : old.getTitle());
        }
        journalServiceEntry.saveEntry(old);
        return old;
    }
    
}
